import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoBagAddSharp } from "react-icons/io5";
import "./Career.component.css";
const Career = () => {
  const cards = [
    {
      heading: "On-Time Delivery",
      description: "Enjoy Guaranteed On-Time Delivery or get a refund",
    },
    {
      heading: "Verified Community",
      description: "Strict filtering for 100% authentic users.",
    },
    {
      heading: "Premium Standards",
      description: "Premium quality standards for all services.",
    },
  ];

  return (
    <>
      <Header />
      <div>
        {/*Hero Section*/}
        <div className="color1">
          <div className="p-5 text-center text-white">
            <h1>Build Your Career with StoneBeam-NH</h1>
            <br />
            <h4>
              Join our team of construction professionals and help shape the
              future of digital construction managemnet.
            </h4>
          </div>

          <div className="d-flex flex-column ms-5 me-5 mt-5 gap-3 ">
            <div className="d-flex gap-1 justify-content-evenly text-white ">
              <h5 className="color2">50+ Team Members</h5>
              <h5 className="color2">95% Employee Satisfaction</h5>
              <h5 className="color2">12 Open Positions</h5>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary">
                <IoBagAddSharp /> View Openings
              </button>
            </div>
          </div>
        </div>

        {/* commitment section */}
        <div className=" d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
          <h6>Our Commitment to Authenticity</h6>
          <h5>
            We strictly filter profiles to ensure 100% authentic users and ban
            spurious profiles.
          </h5>
        </div>
      </div>

      <div className="row">
        {cards.map((item, index) => (
          <div className="col mb-4" key={index}>
            <div className="card bg-white ms-5 me-5 mb-5 fullrounded p-3 shadow-sm h-40 w-30 text-center card-custom">
              <h5>{item.heading}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Career;
