import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../shared/SharedComponents';
import '../../components/shared/shared.css';

const Setting = () => {
  const { currentUser, updateProfile } = useAuth();
  const { addToast } = useToast();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    projectUpdates: true,
    orderAlerts: true,
    marketingEmails: false,
    theme: 'dark',
    language: 'English',
  });

  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  const update = (key, val) => setSettings(prev => ({ ...prev, [key]: val }));

  const handleSave = () => {
    localStorage.setItem('sb_settings', JSON.stringify(settings));
    addToast('Settings saved successfully!', 'success');
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <button onClick={onChange} style={{
      width: '44px', height: '24px', borderRadius: '12px', border: 'none', cursor: 'pointer',
      background: checked ? 'linear-gradient(135deg, #7b2cbf, #9d4edd)' : 'rgba(255,255,255,0.1)',
      position: 'relative', transition: 'all 0.2s', flexShrink: 0,
    }}>
      <div style={{
        width: '18px', height: '18px', borderRadius: '50%', background: '#fff',
        position: 'absolute', top: '3px', left: checked ? '23px' : '3px', transition: 'left 0.2s',
      }} />
    </button>
  );

  return (
    <div className="fade-in" style={{ color: '#fff', maxWidth: '600px' }}>
      <div className="page-title-section">
        <h2>Settings</h2>
        <p>Manage your preferences and account settings</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
        <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: '#c084fc' }}>🔔 Notifications</h4>
        {[
          { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
          { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive updates via SMS' },
          { key: 'projectUpdates', label: 'Project Updates', desc: 'Get notified about project changes' },
          { key: 'orderAlerts', label: 'Order Alerts', desc: 'Alerts for order status changes' },
          { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Promotional content and offers' },
        ].map(item => (
          <div key={item.key} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px',
            background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{item.desc}</div>
            </div>
            <ToggleSwitch checked={settings[item.key]} onChange={() => toggle(item.key)} />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
        <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: '#c084fc' }}>🎨 Appearance</h4>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Theme</label>
            <select className="sb-select" value={settings.theme} onChange={e => update('theme', e.target.value)}>
              <option value="dark">Dark Mode</option>
              <option value="light">Light Mode (Coming Soon)</option>
            </select>
          </div>
          <div className="sb-form-group">
            <label>Language</label>
            <select className="sb-select" value={settings.language} onChange={e => update('language', e.target.value)}>
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-sb btn-sb-primary" onClick={handleSave}>💾 Save Settings</button>
        <button className="btn-sb btn-sb-danger" onClick={() => { localStorage.clear(); addToast('All data cleared. Refresh to reset.', 'warning'); }}>
          🗑 Clear All Data
        </button>
      </div>
    </div>
  );
};

export default Setting;