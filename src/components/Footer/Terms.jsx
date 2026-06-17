import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../components/shared/shared.css';

const Terms = () => {
  return (
    <div style={{ background: 'var(--sb-bg-primary)', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px', color: '#fff' }}>
        <div className="page-title-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px' }}>📜 Terms of Service</h2>
          <p style={{ color: '#888' }}>Last updated: June 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>1. Acceptance of Terms</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              By accessing or using the StoneBeam-NH platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including builders, contractors, dealers, clients, and labourers.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>2. Description of Service</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              StoneBeam-NH provides a digital platform that connects construction professionals including builders, contractors, dealers, clients, and labourers. Our services include project management tools, material ordering, professional networking, and quotation systems.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>3. User Registration</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              To use certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>4. User Conduct</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              Users must not engage in fraudulent activities, misrepresent their identity or qualifications, post false or misleading information, harass other users, or violate any applicable laws. StoneBeam-NH reserves the right to suspend or terminate accounts that violate these guidelines.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>5. Verification Process</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              All construction professionals undergo a verification process. While we strive to ensure authenticity, StoneBeam-NH does not guarantee the accuracy of user-provided information. Users should conduct their own due diligence before engaging in business transactions.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>6. Payment & Fees</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              Basic registration and browsing is free. StoneBeam-NH charges a commission on successful project connections. Premium subscription plans provide additional features. All fees are subject to applicable taxes.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>7. Intellectual Property</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              All content, logos, and trademarks on the StoneBeam-NH platform are owned by StoneBeam-NH or its licensors. Users may not copy, modify, or distribute our intellectual property without prior written consent.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>8. Limitation of Liability</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              StoneBeam-NH acts as a platform connecting construction professionals and is not responsible for the quality of work, materials, or services provided by users. We are not liable for any disputes between users beyond our mediation services.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>9. Contact Information</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              For any questions regarding these Terms of Service, please contact us at <a href="mailto:stonebeamnh@gmail.com" style={{ color: '#c084fc' }}>stonebeamnh@gmail.com</a> or call us at +91-7043297992.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
