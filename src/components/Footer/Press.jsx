import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { mockPressReleases } from '../../data/mockData';
import { useToast } from '../shared/SharedComponents';
import '../../components/shared/shared.css';

const Press = () => {
  const { addToast } = useToast();

  return (
    <div style={{ background: 'var(--sb-bg-primary)', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px', color: '#fff' }}>
        <div className="page-title-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px' }}>📰 Press & Media</h2>
          <p style={{ color: '#888' }}>News, press releases, and media coverage about StoneBeam-NH</p>
        </div>

        {/* Media Contact */}
        <div style={{ padding: '24px', background: 'rgba(123,44,191,0.08)', borderRadius: '16px', border: '1px solid rgba(123,44,191,0.2)', marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '8px' }}>📧 Media Contact</h4>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>For press inquiries, interviews, and media kit requests:</p>
          <p style={{ color: '#c084fc', fontSize: '14px' }}>stonebeamnh@gmail.com • +91-7043297992</p>
        </div>

        {/* Press Releases */}
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>Press Releases</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {mockPressReleases.map(pr => (
            <div key={pr.id} className="project-card" style={{ cursor: 'pointer' }} onClick={() => addToast('Full article opening soon...', 'info')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ color: '#c084fc', fontSize: '12px', fontWeight: 600 }}>{pr.source}</span>
                <span style={{ color: '#666', fontSize: '12px' }}>{pr.date}</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '8px' }}>{pr.title}</h4>
              <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.6 }}>{pr.excerpt}</p>
            </div>
          ))}
        </div>

        {/* Brand Assets */}
        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>Brand Assets</h3>
        <div className="stats-row">
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Logo pack downloading...', 'success')}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎨</div>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Logo Pack</p>
            <p style={{ fontSize: '12px' }}>SVG, PNG, PDF</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Brand guidelines downloading...', 'success')}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📋</div>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Brand Guidelines</p>
            <p style={{ fontSize: '12px' }}>Colors, Typography</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => addToast('Media kit downloading...', 'success')}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📦</div>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Media Kit</p>
            <p style={{ fontSize: '12px' }}>Full Press Kit</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;