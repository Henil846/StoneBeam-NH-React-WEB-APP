import { useState } from 'react';
import { useToast } from '../shared/SharedComponents';
import { mockFAQs } from '../../data/mockData';
import '../../components/shared/shared.css';

const Customercare = () => {
  const { addToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      addToast('Please fill in all required fields', 'error');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/customerCare/customerCare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      addToast('Your message has been sent! We\'ll respond within 24 hours. 📩', 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      addToast(err.message || 'Failed to send message. Please try again.', 'error');
    }
  };

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>Customer Care</h2>
        <p>We're here to help. Reach out to us anytime.</p>
      </div>

      {/* Contact Info Cards */}
      <div className="stats-row" style={{ marginBottom: '32px' }}>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📧</div>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>stonebeamnh@gmail.com</p>
          <p style={{ fontSize: '12px' }}>Email Support</p>
        </div>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📞</div>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>+91-7043297992</p>
          <p style={{ fontSize: '12px' }}>Phone Support</p>
        </div>
        <div className="stat-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>⏰</div>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Mon-Sat, 9AM-6PM</p>
          <p style={{ fontSize: '12px' }}>Working Hours</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
        {/* Contact Form */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Send us a Message</h3>
          <form onSubmit={handleSubmit} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="sb-form-row">
              <div className="sb-form-group">
                <label>Name <span className="required">*</span></label>
                <input className="sb-input" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div className="sb-form-group">
                <label>Email <span className="required">*</span></label>
                <input className="sb-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
              </div>
            </div>
          <div className="sb-form-group">
            <label>Phone Number <span className="required">*</span></label>
           <input className="sb-input"  type="tel" placeholder="Enter your phone number" value={form.phone} onChange={e => setForm(p => ({ ...p,phone: e.target.value }))} />
          </div>
            <div className="sb-form-group">
              <label>Subject</label>
              <input className="sb-input" placeholder="What's this about?" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} />
            </div>
            <div className="sb-form-group">
              <label>Message <span className="required">*</span></label>
              <textarea className="sb-textarea" placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} />
            </div>
            <button className="btn-sb btn-sb-primary" type="submit">📩 Send Message</button>
          </form>
        </div>

        {/* FAQ */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Frequently Asked Questions</h3>
          <div className="sb-accordion">
            {mockFAQs.slice(0, 6).map(faq => (
              <div key={faq.id} className="sb-accordion-item">
                <button className="sb-accordion-header" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                  {faq.question}
                  <span className={`sb-accordion-icon ${openFaq === faq.id ? 'open' : ''}`}>▼</span>
                </button>
                {openFaq === faq.id && <div className="sb-accordion-body">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customercare;