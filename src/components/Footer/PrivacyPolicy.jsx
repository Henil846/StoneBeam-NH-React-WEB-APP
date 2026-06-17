import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../components/shared/shared.css';

const PrivacyPolicy = () => {
  return (
    <div style={{ background: 'var(--sb-bg-primary)', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px', color: '#fff' }}>
        <div className="page-title-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px' }}>🔒 Privacy Policy</h2>
          <p style={{ color: '#888' }}>Last updated: June 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>1. Information We Collect</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              We collect information you provide during registration, including your name, email address, phone number, location, professional qualifications, and company details. We also collect usage data such as pages visited, features used, and interaction patterns to improve our services.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>2. How We Use Your Information</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              Your information is used to provide and improve our platform services, verify user identities, facilitate connections between construction professionals, send important updates and notifications, and personalize your experience on StoneBeam-NH.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>3. Information Sharing</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              We do not sell your personal information to third parties. Your profile information is visible to other registered users as necessary for platform functionality. We may share information with law enforcement when required by law.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>4. Data Security</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>5. Cookies & Tracking</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              StoneBeam-NH uses cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze platform usage. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>6. Your Rights</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              You have the right to access, update, or delete your personal information. You can modify your profile details through your account settings. To request data deletion, please contact our support team.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>7. Data Retention</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting our support team.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>8. Changes to This Policy</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              We may update this Privacy Policy from time to time. We will notify users of any significant changes via email or platform notifications. Continued use of the platform after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#c084fc' }}>9. Contact Us</h3>
            <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '14px' }}>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:stonebeamnh@gmail.com" style={{ color: '#c084fc' }}>stonebeamnh@gmail.com</a> or call us at +91-7043297992. Our office is located in Ahmedabad, Gujarat, India.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
