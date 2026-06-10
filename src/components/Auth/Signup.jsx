import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../shared/SharedComponents';
import { ROLES, LOCATIONS } from '../../data/mockData';
import API_BASE from '../../config/api';
import './Auth.css';

const Signup = () => {
  // ─── Step Management ───
  // Step 1: Email + Send OTP
  // Step 2: Enter & Verify OTP
  // Step 3: Fill Details + Create Account
  const [step, setStep] = useState(1);
  const [emailVerified, setEmailVerified] = useState(false);

  // ─── Form State ───
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    role: 'Client', location: 'Ahmedabad, Gujarat', company: ''
  });

  // ─── OTP State ───
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef([]);

  // ─── General State ───
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { addToast } = useToast();

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  // ─── Countdown Timer ───
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  // ─── Validate Email ───
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  // ─── Send OTP ───
  const handleSendOTP = async () => {
    if (!isEmailValid) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSuccess('');
    setOtpSending(true);

    try {
      const res = await fetch(`${API_BASE}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to send OTP');

      setOtpSent(true);
      setCountdown(120); // 2 minute countdown
      setStep(2);
      setSuccess('OTP sent! Check your email inbox.');
      // Focus first OTP input after transition
      setTimeout(() => otpRefs.current[0]?.focus(), 400);
    } catch (err) {
      setError(err.message);
    } finally {
      setOtpSending(false);
    }
  };

  // ─── OTP Input Handler ───
  const handleOtpChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    if (e.key === 'Enter') {
      const fullOtp = otp.join('');
      if (fullOtp.length === 6) handleVerifyOTP();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      otpRefs.current[5]?.focus();
    }
  };

  // ─── Verify OTP ───
  const handleVerifyOTP = async () => {
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }
    setError('');
    setSuccess('');
    setOtpVerifying(true);

    try {
      const res = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, otp: fullOtp }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.expired) {
          setStep(1);
          setOtp(['', '', '', '', '', '']);
          setOtpSent(false);
        }
        throw new Error(data.message || 'Verification failed');
      }

      setEmailVerified(true);
      setSuccess('Email verified successfully! 🎉');
      // Move to step 3 after brief celebration
      setTimeout(() => {
        setStep(3);
        setError('');
        setSuccess('');
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setOtpVerifying(false);
    }
  };

  // ─── Resend OTP ───
  const handleResendOTP = async () => {
    setOtp(['', '', '', '', '', '']);
    await handleSendOTP();
    setTimeout(() => otpRefs.current[0]?.focus(), 400);
  };

  // ─── Submit Registration ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!emailVerified) {
      setError('Please verify your email first');
      setStep(1);
      return;
    }
    if (!form.name.trim()) { setError('Please enter your full name'); return; }
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return; }
    if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return; }

    setLoading(true);
    try {
      await signup(form);
      addToast('Account created successfully! Welcome aboard! 🎉', 'success');
      const roleRoutes = {
        'Builder': '/builder', 'Dealer': '/dealer', 'Client': '/client',
        'Contractor': '/contractor', 'Labourer': '/labourer', 'Skilled Labourer': '/skilledlabourer',
      };
      navigate(roleRoutes[form.role] || '/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ─── Format countdown ───
  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <span className="auth-brand-logo text-gradient">SB</span>
          <h2>Join StoneBeam-NH</h2>
          <p>Create your free account and connect with thousands of construction professionals across Gujarat.</p>
          <div className="auth-brand-features">
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">🏗</span>
              <span>Post and discover construction projects</span>
            </div>
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">🤝</span>
              <span>Connect with verified professionals</span>
            </div>
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">📦</span>
              <span>Order materials from trusted dealers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Create Account</h2>
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>

          {/* ─── Step Progress Indicator ─── */}
          <div className="otp-step-indicator">
            <div className={`otp-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="otp-step-circle">
                {step > 1 ? '✓' : '1'}
              </div>
              <span className="otp-step-label">Email</span>
            </div>
            <div className={`otp-step-line ${step > 1 ? 'active' : ''}`} />
            <div className={`otp-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="otp-step-circle">
                {step > 2 ? '✓' : '2'}
              </div>
              <span className="otp-step-label">Verify</span>
            </div>
            <div className={`otp-step-line ${step > 2 ? 'active' : ''}`} />
            <div className={`otp-step ${step >= 3 ? 'active' : ''}`}>
              <div className="otp-step-circle">3</div>
              <span className="otp-step-label">Details</span>
            </div>
          </div>

          {error && <div className="auth-error-msg">⚠ {error}</div>}
          {success && <div className="auth-success-msg">✓ {success}</div>}

          {/* ═══════════════ STEP 1: Email ═══════════════ */}
          {step === 1 && (
            <div className="otp-step-content otp-fade-in">
              <div className="sb-form-group">
                <label>Email Address <span className="required">*</span></label>
                <input
                  className="sb-input"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  autoFocus
                />
              </div>

              {isEmailValid && (
                <button
                  className="auth-submit-btn otp-send-btn otp-fade-in"
                  type="button"
                  onClick={handleSendOTP}
                  disabled={otpSending}
                >
                  {otpSending ? (
                    <span className="otp-btn-loading">
                      <span className="otp-spinner" />
                      Sending OTP...
                    </span>
                  ) : (
                    <>📧 Send OTP</>
                  )}
                </button>
              )}

              {!isEmailValid && form.email && (
                <p className="otp-hint">Enter a valid email to receive OTP</p>
              )}
            </div>
          )}

          {/* ═══════════════ STEP 2: Verify OTP ═══════════════ */}
          {step === 2 && (
            <div className="otp-step-content otp-fade-in">
              <div className="otp-verify-header">
                <p className="otp-sent-to">
                  We sent a code to <strong>{form.email}</strong>
                </p>
                <button
                  className="otp-change-email"
                  type="button"
                  onClick={() => { setStep(1); setOtpSent(false); setOtp(['', '', '', '', '', '']); setError(''); setSuccess(''); }}
                >
                  Change email
                </button>
              </div>

              <div className="otp-input-group" onPaste={handleOtpPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={el => otpRefs.current[i] = el}
                    className={`otp-digit-input ${digit ? 'filled' : ''} ${emailVerified ? 'verified' : ''}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKeyDown(i, e)}
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              {countdown > 0 && (
                <p className="otp-countdown">
                  Code expires in <span className="otp-countdown-time">{formatTime(countdown)}</span>
                </p>
              )}

              <button
                className="auth-submit-btn otp-verify-btn"
                type="button"
                onClick={handleVerifyOTP}
                disabled={otpVerifying || otp.join('').length !== 6}
              >
                {otpVerifying ? (
                  <span className="otp-btn-loading">
                    <span className="otp-spinner" />
                    Verifying...
                  </span>
                ) : emailVerified ? (
                  <>✓ Verified!</>
                ) : (
                  <>🔐 Verify OTP</>
                )}
              </button>

              <div className="otp-resend-row">
                <span className="otp-resend-text">Didn't receive the code?</span>
                <button
                  className="otp-resend-btn"
                  type="button"
                  onClick={handleResendOTP}
                  disabled={countdown > 0 || otpSending}
                >
                  {countdown > 0 ? `Resend in ${formatTime(countdown)}` : 'Resend OTP'}
                </button>
              </div>
            </div>
          )}

          {/* ═══════════════ STEP 3: Details ═══════════════ */}
          {step === 3 && (
            <div className="otp-step-content otp-fade-in">
              <div className="otp-verified-badge">
                <span className="otp-verified-icon">✓</span>
                <span>{form.email}</span>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="sb-form-row">
                  <div className="sb-form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input className="sb-input" placeholder="John Doe" value={form.name} onChange={e => update('name', e.target.value)} autoFocus />
                  </div>
                  <div className="sb-form-group">
                    <label>Phone Number</label>
                    <input className="sb-input" placeholder="+91-XXXXXXXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                </div>
                <div className="sb-form-row">
                  <div className="sb-form-group">
                    <label>Password <span className="required">*</span></label>
                    <input className="sb-input" type="password" placeholder="Min 6 characters" value={form.password} onChange={e => update('password', e.target.value)} />
                  </div>
                  <div className="sb-form-group">
                    <label>Confirm Password <span className="required">*</span></label>
                    <input className="sb-input" type="password" placeholder="Confirm password" value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)} />
                  </div>
                </div>
                <div className="sb-form-row">
                  <div className="sb-form-group">
                    <label>Role <span className="required">*</span></label>
                    <select className="sb-select" value={form.role} onChange={e => update('role', e.target.value)}>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="sb-form-group">
                    <label>Location</label>
                    <select className="sb-select" value={form.location} onChange={e => update('location', e.target.value)}>
                      {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                {(form.role === 'Builder' || form.role === 'Dealer' || form.role === 'Contractor') && (
                  <div className="sb-form-group">
                    <label>Company Name</label>
                    <input className="sb-input" placeholder="Your company" value={form.company} onChange={e => update('company', e.target.value)} />
                  </div>
                )}
                <button className="auth-submit-btn" type="submit" disabled={loading} style={{ marginTop: '8px' }}>
                  {loading ? 'Creating account...' : '🚀 Create Account'}
                </button>
              </form>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/" style={{ color: 'var(--sb-text-accent)', fontSize: '14px' }}>← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
