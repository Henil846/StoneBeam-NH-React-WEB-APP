import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../shared/SharedComponents';
import { LOCATIONS, SPECIALIZATIONS } from '../../data/mockData';
import '../../components/shared/shared.css';

const Profile = () => {
  const { currentUser, updateProfile } = useAuth();
  const { addToast } = useToast();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: currentUser?.name || 'Demo Builder',
    email: currentUser?.email || 'demo@stonebeam.com',
    phone: currentUser?.phone || '+91-9876543210',
    company: currentUser?.company || 'Demo Constructions',
    location: currentUser?.location || 'Ahmedabad, Gujarat',
    bio: currentUser?.bio || 'Professional construction builder with years of experience.',
    experience: '10 years',
    specializations: ['Residential Construction', 'Commercial Projects'],
  });

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSave = () => {
    if (!form.name.trim()) { addToast('Name is required', 'error'); return; }
    if (!form.email.trim()) { addToast('Email is required', 'error'); return; }
    updateProfile?.(form);
    setEditing(false);
    addToast('Profile updated successfully!', 'success');
  };

  const toggleSpec = (s) => {
    setForm(p => ({
      ...p,
      specializations: p.specializations.includes(s)
        ? p.specializations.filter(x => x !== s)
        : [...p.specializations, s]
    }));
  };

  return (
    <div className="fade-in" style={{ color: '#fff', maxWidth: '700px' }}>
      <div className="page-title-section">
        <h2>My Profile</h2>
        <p>Manage your builder profile information</p>
      </div>

      {/* Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px', padding: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: 'linear-gradient(135deg, #7b2cbf, #9d4edd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700' }}>
          {form.name?.[0]?.toUpperCase() || 'B'}
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: '20px' }}>{form.name}</h3>
          <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>Builder • {form.location}</p>
        </div>
        <button className="btn-sb btn-sb-outline btn-sb-sm" style={{ marginLeft: 'auto' }} onClick={() => setEditing(!editing)}>
          {editing ? 'Cancel' : '✏ Edit Profile'}
        </button>
      </div>

      {/* Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Full Name <span className="required">*</span></label>
            <input className="sb-input" value={form.name} onChange={e => update('name', e.target.value)} disabled={!editing} />
          </div>
          <div className="sb-form-group">
            <label>Email</label>
            <input className="sb-input" value={form.email} onChange={e => update('email', e.target.value)} disabled={!editing} />
          </div>
        </div>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Phone</label>
            <input className="sb-input" value={form.phone} onChange={e => update('phone', e.target.value)} disabled={!editing} />
          </div>
          <div className="sb-form-group">
            <label>Company</label>
            <input className="sb-input" value={form.company} onChange={e => update('company', e.target.value)} disabled={!editing} />
          </div>
        </div>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Location</label>
            <select className="sb-select" value={form.location} onChange={e => update('location', e.target.value)} disabled={!editing}>
              {LOCATIONS.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="sb-form-group">
            <label>Experience</label>
            <input className="sb-input" value={form.experience} onChange={e => update('experience', e.target.value)} disabled={!editing} />
          </div>
        </div>
        <div className="sb-form-group">
          <label>Bio</label>
          <textarea className="sb-textarea" value={form.bio} onChange={e => update('bio', e.target.value)} disabled={!editing} rows={3} />
        </div>

        {editing && (
          <div className="sb-form-group">
            <label>Specializations</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
              {SPECIALIZATIONS.slice(0, 10).map(s => (
                <button key={s} className={`user-card-tag`} style={{
                  cursor: 'pointer', border: 'none',
                  background: form.specializations.includes(s) ? 'rgba(123,44,191,0.3)' : 'rgba(255,255,255,0.06)',
                  color: form.specializations.includes(s) ? '#c084fc' : '#888'
                }} onClick={() => toggleSpec(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}

        {editing && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button className="btn-sb btn-sb-primary" onClick={handleSave}>💾 Save Changes</button>
            <button className="btn-sb btn-sb-outline" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;