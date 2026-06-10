import "../Builder/builder.component.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "./Sidebar";
import DashboardHome from "../shared/DashboardHome";
import Profile from "../Builder/Profile";
import Findprojects from "../Builder/Findprojects";
import Findcontractor from "../Labourer/Findcontractor";
import Findclients from "../Builder/Findclients";
import Orderstatus from "../Builder/Orderstatus";
import Setting from "../Services/Setting";
import Aboutus from "../Services/AboutUs";
import Customercare from "../Services/Customercare";

const SkilledLabour = () => {
  const [activePage, setActivePage] = useState("home");
  const renderPage = () => {
    switch (activePage) {
      case "home": return <DashboardHome role="Skilled Labourer" />;
      case "profile": return <Profile />;
      case "findprojects": return <Findprojects />;
      case "findcontractor": return <Findcontractor />;
      case "findclients": return <Findclients />;
      case "orderstatus": return <Orderstatus />;
      case "settings": return <Setting />;
      case "aboutus": return <Aboutus />;
      case "customercare": return <Customercare />;
      default: return <DashboardHome role="Skilled Labourer" />;
    }
  };
  return (
    <div className="Whole_page">
      <Sidebar onPageChange={setActivePage} activePage={activePage} />
      <div className="MainContent"><Header /><div className="PageContent">{renderPage()}</div><Footer /></div>
    </div>
  );
};
export default SkilledLabour;
