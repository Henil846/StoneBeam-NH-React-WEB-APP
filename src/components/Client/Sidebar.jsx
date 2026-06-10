import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../shared/SharedComponents';
import { FiHome, FiUser, FiPlusSquare, FiSearch, FiTool, FiShoppingBag, FiPackage, FiSettings, FiInfo, FiHeadphones, FiLogOut, FiChevronLeft } from 'react-icons/fi';
import "../Builder/Sidebar.component.css";
const Sidebar = ({ onPageChange, activePage }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { addToast } = useToast();
  const items = [
    { key: 'home', label: 'Home', icon: <FiHome /> },
    { key: 'profile', label: 'Profile', icon: <FiUser /> },
    { key: 'createprojects', label: 'Create Projects', icon: <FiPlusSquare /> },
    { key: 'findprojects', label: 'Find Projects', icon: <FiSearch /> },
    { key: 'findbuilder', label: 'Find Builder', icon: <FiShoppingBag /> },
    { key: 'findcontractor', label: 'Find Contractor', icon: <FiPackage /> },
    { key: 'finddealer', label: 'Find Dealer', icon: <FiShoppingBag /> },
    { key: 'findelectricianplumber', label: 'Find Electrician/Plumber', icon: <FiTool /> },
    { key: 'orderstatus', label: 'Order Status', icon: <FiPackage /> },
    { divider: true },
    { key: 'settings', label: 'Settings', icon: <FiSettings /> },
    { key: 'aboutus', label: 'About Us', icon: <FiInfo /> },
    { key: 'customercare', label: 'Customer Care', icon: <FiHeadphones /> },
  ];
  const handleLogout = () => { logout(); addToast('Logged out', 'info'); navigate('/'); };
  return (
    <div className="sb-sidebar">
      <div className="sb-sidebar-header"><button className="sb-sidebar-back" onClick={() => navigate('/')}><FiChevronLeft /> <span>Back</span></button></div>
      <nav className="sb-sidebar-nav">
        {items.map((item, i) => {
          if (item.divider) return <div key={i} className="sb-sidebar-divider" />;
          return (<button key={item.key} className={`sb-sidebar-item ${activePage === item.key ? 'active' : ''}`} onClick={() => onPageChange(item.key)}><span className="sb-sidebar-icon">{item.icon}</span><span className="sb-sidebar-label">{item.label}</span></button>);
        })}
      </nav>
      <div className="sb-sidebar-footer">
        <div className="sb-sidebar-user"><div className="sb-sidebar-avatar">{currentUser?.name?.[0]?.toUpperCase() || 'C'}</div><div className="sb-sidebar-user-info"><span className="sb-sidebar-user-name">{currentUser?.name?.split(' ')[0] || 'Client'}</span><span className="sb-sidebar-user-role">Client</span></div></div>
        <button className="sb-sidebar-logout" onClick={handleLogout}><FiLogOut /> Logout</button>
      </div>
    </div>
  );
};
export default Sidebar;
