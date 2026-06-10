import "../Builder/builder.component.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "./Sidebar";
import DashboardHome from "../shared/DashboardHome";
import Profile from "../Builder/Profile";
import Createprojects from "./Createproject";
import Findprojects from "./Findprojects";
import Finddealer from "./Finddealer";
import Findclients from "./Findclients";
import Findbuilder from "./Findbuilder";
import Findelectricianplumber from "./Findelectricianplumber";
import Orderstatus from "../Builder/Orderstatus";
import Setting from "../Services/Setting";
import Aboutus from "../Services/AboutUs";
import Customercare from "../Services/Customercare";

const Contract = () => {
  const [activePage, setActivePage] = useState("home");
  const renderPage = () => {
    switch (activePage) {
      case "home": return <DashboardHome role="Contractor" />;
      case "profile": return <Profile />;
      case "createprojects": return <Createprojects />;
      case "findbuilder": return <Findbuilder />;
      case "finddealer": return <Finddealer />;
      case "findelectricianplumber": return <Findelectricianplumber />;
      case "findprojects": return <Findprojects />;
      case "findclients": return <Findclients />;
      case "orderstatus": return <Orderstatus />;
      case "settings": return <Setting />;
      case "aboutus": return <Aboutus />;
      case "customercare": return <Customercare />;
      default: return <DashboardHome role="Contractor" />;
    }
  };
  return (
    <div className="Whole_page">
      <Sidebar onPageChange={setActivePage} activePage={activePage} />
      <div className="MainContent"><Header /><div className="PageContent">{renderPage()}</div><Footer /></div>
    </div>
  );
};
export default Contract;
