import "../Builder/builder.component.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "./Sidebar";
import DashboardHome from "../shared/DashboardHome";
import Profile from "../Builder/Profile";
import Createprojects from "./Createprojects";
import Findprojects from "../Builder/Findprojects";
import Findelectricianplumber from "./Findelectricianplumber";
import Findcontractor from "./Findcontractor";
import Finddealer from "./Finddealer";
import Findbuilder from "./Findbuilder";
import Orderstatus from "../Builder/Orderstatus";
import Settings from "../Services/Setting";
import Aboutus from "../Services/AboutUs";
import Customercare from "../Services/Customercare";

const Client = () => {
  const [activePage, setActivePage] = useState("home");
  const renderPage = () => {
    switch (activePage) {
      case "home": return <DashboardHome role="Client" />;
      case "profile": return <Profile />;
      case "createprojects": return <Createprojects />;
      case "findprojects": return <Findprojects />;
      case "findbuilder": return <Findbuilder />;
      case "findelectricianplumber": return <Findelectricianplumber />;
      case "findcontractor": return <Findcontractor />;
      case "finddealer": return <Finddealer />;
      case "orderstatus": return <Orderstatus />;
      case "settings": return <Settings />;
      case "aboutus": return <Aboutus />;
      case "customercare": return <Customercare />;
      default: return <DashboardHome role="Client" />;
    }
  };
  return (
    <div className="Whole_page">
      <Sidebar onPageChange={setActivePage} activePage={activePage} />
      <div className="MainContent"><Header /><div className="PageContent">{renderPage()}</div><Footer /></div>
    </div>
  );
};
export default Client;
