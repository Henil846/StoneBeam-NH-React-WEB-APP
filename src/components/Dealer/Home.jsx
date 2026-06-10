import { useData } from '../../context/DataContext';
import { mockUsers } from '../../data/mockData';
import '../../components/shared/shared.css';

const Home = () => {
  const { orders } = useData();
  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section"><h2>Dealer Dashboard</h2><p>Welcome back! Manage your supply operations.</p></div>
      <div className="stats-row">
        <div className="stat-card"><div className="stat-card-icon" style={{ background: 'rgba(123,44,191,0.15)', color: '#c084fc' }}>📦</div><h3>{orders.length}</h3><p>Total Orders</p></div>
        <div className="stat-card"><div className="stat-card-icon" style={{ background: 'rgba(46,204,113,0.15)', color: '#2ecc71' }}>✅</div><h3>{orders.filter(o => o.status === 'Delivered').length}</h3><p>Delivered</p></div>
        <div className="stat-card"><div className="stat-card-icon" style={{ background: 'rgba(243,156,18,0.15)', color: '#f39c12' }}>⏳</div><h3>{orders.filter(o => o.status !== 'Delivered').length}</h3><p>Pending</p></div>
        <div className="stat-card"><div className="stat-card-icon" style={{ background: 'rgba(52,152,219,0.15)', color: '#3498db' }}>👥</div><h3>{mockUsers.filter(u => u.role === 'Builder').length}</h3><p>Connected Builders</p></div>
      </div>
    </div>
  );
};
export default Home;