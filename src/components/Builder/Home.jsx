import '../../components/shared/shared.css';
import { useData } from '../../context/DataContext';
import { mockUsers, mockProjects } from '../../data/mockData';

const Home = () => {
  const { projects, orders } = useData();
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const pendingOrders = orders.filter(o => o.status === 'Pending' || o.status === 'Processing').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;

  const recentActivity = [
    { icon: '📋', text: 'New project "Luxury Villa" updated to 45% progress', time: '2 hours ago' },
    { icon: '📦', text: 'Material order #o2 is in transit', time: '5 hours ago' },
    { icon: '👤', text: 'New contractor Kiran Joshi connected', time: '1 day ago' },
    { icon: '✅', text: 'Apartment Renovation project completed', time: '2 days ago' },
    { icon: '💰', text: 'Payment of ₹4,50,000 received for order #o1', time: '3 days ago' },
  ];

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>Builder Dashboard</h2>
        <p>Welcome back! Here's your overview.</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(123,44,191,0.15)', color: '#c084fc' }}>🏗</div>
          <h3>{activeProjects}</h3>
          <p>Active Projects</p>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(243,156,18,0.15)', color: '#f39c12' }}>📦</div>
          <h3>{pendingOrders}</h3>
          <p>Pending Orders</p>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(46,204,113,0.15)', color: '#2ecc71' }}>✅</div>
          <h3>{completedProjects}</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(52,152,219,0.15)', color: '#3498db' }}>👥</div>
          <h3>{mockUsers.filter(u => u.role === 'Contractor').length}</h3>
          <p>Connected Pros</p>
        </div>
      </div>

      <div className="section-header">
        <h2>Recent Activity</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {recentActivity.map((a, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px',
            borderRadius: '10px', background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)', marginBottom: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>{a.icon}</span>
            <span style={{ flex: 1, fontSize: '14px', color: '#ccc' }}>{a.text}</span>
            <span style={{ fontSize: '12px', color: '#666', whiteSpace: 'nowrap' }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;