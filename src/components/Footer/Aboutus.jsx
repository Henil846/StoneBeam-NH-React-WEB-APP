import "./Aboutus.component.css";
import aboutImage from "../../assets/about1.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="aboutus">

        <section className="hero-section d-flex align-items-center text-center">
          <div className="hero-content">
            <h1 className="display-4 fw-bold">Welcome to Our Company</h1>
            <h2 className="mb-3">Connecting Dreams with Trusted Builders</h2>
            <p className="lead mb-4">
              StoneBeam-NH is the leading digital platform connecting homeowners
              and businesses with verified construction contractors across Gujarat.
            </p>

            <div className="row justify-content-center">
              <div className="col-md-3 col-6 mb-3">
                <div className="stat-box">
                  <h3>0+</h3>
                  <p>Verified Contractors</p>
                </div>
              </div>

              <div className="col-md-3 col-6 mb-3">
                <div className="stat-box">
                  <h3>0+</h3>
                  <p>Projects Connected</p>
                </div>
              </div>

              <div className="col-md-3 col-6 mb-3">
                <div className="stat-box">
                  <h3>98%</h3>
                  <p>Successful Matches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="section-padding">
          <div className="row align-items-center m-0">

            <div className="col-md-6 p-5">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <h4 className="fw-semibold">Bridging the Gap</h4>
              <p>
                Established in 2026 in Ahmedabad, Gujarat, StoneBeam-NH was created
                to connect reliable clients with trustworthy contractors through
                a secure and transparent digital platform.
              </p>
              <p>
                Our platform eliminates fraudulent profiles, ensures verified identities,
                and facilitates seamless project quotations and management.
              </p>
            </div>

            <div className="col-md-6 text-center p-5">
              <img
                src={aboutImage}
                alt="Construction"
                className="img-fluid rounded shadow-lg about-image"
              />
            </div>

          </div>
        </section>

        {/* MISSION / VISION / VALUES */}
        <section className="section-padding">
          <div className="row text-center m-0">

            <div className="col-md-4 p-4">
              <div className="dark-card">
                <h4>Our Mission</h4>
                <p>
                  To create a trusted digital ecosystem that connects homeowners
                  with verified construction professionals.
                </p>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="dark-card">
                <h4>Our Vision</h4>
                <p>
                  To be India's most trusted construction marketplace where every
                  project finds the perfect contractor.
                </p>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="dark-card">
                <h4>Our Values</h4>
                <ul className="list-unstyled">
                  <li>✔ Trust</li>
                  <li>✔ Transparency</li>
                  <li>✔ Innovation</li>
                  <li>✔ Security</li>
                  <li>✔ Excellence</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-padding text-center">
          <h2 className="fw-bold mb-5">Why Choose StoneBeam-NH?</h2>

          <div className="row m-0">

            <div className="col-md-4 p-4">
              <div className="feature-box">
                <h5>Verified Excellence</h5>
                <p>All contractors are thoroughly vetted and verified.</p>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="feature-box">
                <h5>On-Time Delivery</h5>
                <p>98% on-time project completion rate.</p>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="feature-box">
                <h5>Transparent Pricing</h5>
                <p>No hidden charges. Clear quotation breakdowns.</p>
              </div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Aboutus;