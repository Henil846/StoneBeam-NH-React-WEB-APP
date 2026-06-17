import "./App.css";
import Firstpage from "./components/First_page/Firstpage";
import Build from "./components/Builder/builder";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Deal from "./components/Dealer/dealer";
import Client from "./components/Client/client";
import Contract from "./components/Contractor/contractor";
import Labour from "./components/Labourer/labourer";
import SkilledLabour from "./components/SkilledLabourer/skilledlabourer";
import Aboutus from "./components/Footer/Aboutus";
import Career from "./components/Footer/Career";
import Blog from "./components/Footer/Blog";
import Guides from "./components/Footer/Guides";
import HelpCenter from "./components/Footer/HelpCenter";
import Press from "./components/Footer/Press";
import Terms from "./components/Footer/Terms";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import NotFound from "./components/Auth/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/builder" element={<Build />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contractor" element={<Contract />} />
        <Route path="/dealer" element={<Deal />} />
        <Route path="/labourer" element={<Labour />} />
        <Route path="/skilledlabourer" element={<SkilledLabour />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Guides" element={<Guides />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Press" element={<Press />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
