import '../../components/shared/shared.css';

const AboutUs = () => (
  <div className="fade-in" style={{ color: '#fff' }}>
    <div className="page-title-section">
      <h2>About StoneBeam-NH</h2>
      <p>Building trust, one project at a time.</p>
    </div>
    <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <h4 style={{ marginBottom: '10px', color: '#c084fc' }}>🏗 Our Story</h4>
        <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.7 }}>
          Established in 2026 in Ahmedabad, Gujarat, StoneBeam-NH was created to connect reliable clients
          with trustworthy contractors through a secure and transparent digital platform. Our platform eliminates
          fraudulent profiles, ensures verified identities, and facilitates seamless project management.
        </p>
      </div>
      <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <h4 style={{ marginBottom: '10px', color: '#c084fc' }}>🎯 Our Mission</h4>
        <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.7 }}>
          To create a trusted digital ecosystem that connects homeowners with verified construction professionals,
          ensuring quality, transparency, and timely delivery in every project.
        </p>
      </div>
      <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <h4 style={{ marginBottom: '10px', color: '#c084fc' }}>📞 Contact</h4>
        <div style={{ color: '#aaa', fontSize: '14px', lineHeight: 2 }}>
          <div>📧 stonebeamnh@gmail.com</div>
          <div>📞 +91-7043297992 / +91-9106120047</div>
          <div>📍 Ahmedabad, Gujarat, India</div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;