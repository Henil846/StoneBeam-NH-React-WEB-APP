import { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useToast } from '../shared/SharedComponents';
import { mockFAQs } from '../../data/mockData';
import '../../components/shared/shared.css';

const HelpCenter = () => {
  const { addToast } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const filteredFaqs = mockFAQs.filter(f => f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { addToast('Please fill all fields', 'error'); return; }
    addToast('Message sent! We\'ll respond within 24 hours. 📩', 'success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ background: 'var(--sb-bg-primary)', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px', color: '#fff' }}>
        <div className="page-title-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px' }}>❓ Help Center</h2>
          <p style={{ color: '#888' }}>Find answers or get in touch with our support team</p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: '500px', margin: '0 auto 40px' }}>
          <div className="search-input-group">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for help..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '15px', outline: 'none' }} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="stats-row" style={{ marginBottom: '40px' }}>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Getting started guide coming soon!', 'info')}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🚀</div><p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Getting Started</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Account help coming soon!', 'info')}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>👤</div><p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Account</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Payment help coming soon!', 'info')}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>💳</div><p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Payments</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Safety info coming soon!', 'info')}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div><p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Safety</p>
          </div>
        </div>

        {/* FAQ */}
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Frequently Asked Questions</h3>
        <div className="sb-accordion" style={{ marginBottom: '40px' }}>
          {filteredFaqs.map(faq => (
            <div key={faq.id} className="sb-accordion-item">
              <button className="sb-accordion-header" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                {faq.question}
                <span className={`sb-accordion-icon ${openFaq === faq.id ? 'open' : ''}`}>▼</span>
              </button>
              {openFaq === faq.id && <div className="sb-accordion-body">{faq.answer}</div>}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Still need help?</h3>
        <form onSubmit={handleSubmit} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="sb-form-row">
            <div className="sb-form-group"><label>Name</label><input className="sb-input" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></div>
            <div className="sb-form-group"><label>Email</label><input className="sb-input" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} /></div>
          </div>
          <div className="sb-form-group"><label>Message</label><textarea className="sb-textarea" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} /></div>
          <button className="btn-sb btn-sb-primary" type="submit">📩 Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;