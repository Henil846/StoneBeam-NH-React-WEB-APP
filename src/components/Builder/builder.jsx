import "./builder.component.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Profile from "./Profile";
import Createprojects from "./Createprojects";
import Findprojects from "./Findprojects";
import Finddealer from "./Finddealer";
import Findcontractor from "./Findcontractor";
import Findclients from "./Findclients";
import Orderstatus from "./Orderstatus";
import Setting from "../Services/Setting";
import Aboutus from "../Services/AboutUs";
import Customercare from "../Services/Customercare";

const Build = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home": return <Home />;
      case "profile": return <Profile />;
      case "createprojects": return <Createprojects />;
      case "findprojects": return <Findprojects />;
      case "finddealer": return <Finddealer />;
      case "findcontractor": return <Findcontractor />;
      case "findclients": return <Findclients />;
      case "orderstatus": return <Orderstatus />;
      case "settings": return <Setting />;
      case "aboutus": return <Aboutus />;
      case "customercare": return <Customercare />;
      default: return <Home />;
    }
  };

  return (
    <div className="Whole_page">
      <Sidebar onPageChange={setActivePage} activePage={activePage} />
      <div className="MainContent">
        <Header />
        <div className="PageContent">{renderPage()}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Build;
