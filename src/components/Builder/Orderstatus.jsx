import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useToast } from '../shared/SharedComponents';
import { EmptyState } from '../shared/SharedComponents';
import API_BASE from '../../config/api';
import '../../components/shared/shared.css';

const statusColors = {
  'Pending': { bg: 'rgba(149,165,166,0.15)', color: '#95a5a6' },
  'Processing': { bg: 'rgba(52,152,219,0.15)', color: '#3498db' },
  'In Transit': { bg: 'rgba(243,156,18,0.15)', color: '#f39c12' },
  'Delivered': { bg: 'rgba(46,204,113,0.15)', color: '#2ecc71' },
};

const Orderstatus = () => {
  const { orders: localOrders, updateOrderStatus } = useData();
  const { addToast } = useToast();
  const [filter, setFilter] = useState('all');
  const [orders, setOrders] = useState(localOrders);
  const [loading, setLoading] = useState(true);

  // Fetch orders from backend API, fall back to local data
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_BASE}/orderStatus/orderStatus`, {
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok && data.orders && data.orders.length > 0) {
          // Map backend order fields to frontend expected format
          const mappedOrders = data.orders.map(o => ({
            id: o._id || o.orderId || o.id,
            materials: o.materials || [],
            total: o.total ? `₹${o.total.toLocaleString('en-IN')}` : '₹0',
            orderDate: o.orderDate ? new Date(o.orderDate).toISOString().split('T')[0] : '',
            status: o.status || 'Pending',
          }));
          setOrders(mappedOrders);
        } else {
          // Fall back to local orders if backend has no data
          setOrders(localOrders);
        }
      } catch (err) {
        console.error('Failed to fetch orders from API, using local data:', err);
        setOrders(localOrders);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Update local orders when localOrders change (if API had no data)
  useEffect(() => {
    if (!loading && orders === localOrders) {
      setOrders(localOrders);
    }
  }, [localOrders]);

  const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  const handleStatusChange = (id, newStatus) => {
    // Update locally
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    updateOrderStatus(id, newStatus);
    addToast(`Order status updated to ${newStatus}`, 'success');
  };

  if (loading) {
    return (
      <div className="fade-in" style={{ color: '#fff', textAlign: 'center', padding: '60px 0' }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
        <p style={{ color: '#888' }}>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>Order Status</h2>
        <p>Track and manage your material orders</p>
      </div>

      <div className="sb-tabs" style={{ marginBottom: '24px' }}>
        {['all', 'Pending', 'Processing', 'In Transit', 'Delivered'].map(s => (
          <button key={s} className={`sb-tab ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>
            {s === 'all' ? 'All Orders' : s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon="📦" title="No orders found" message="No orders match the selected filter." />
      ) : (
        <div className="sb-table-wrapper">
          <table className="sb-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Materials</th>
                <th>Total</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600 }}>#{String(o.id).toUpperCase()}</td>
                  <td>{o.materials.map(m => `${m.name} (${m.qty || m.quantity} ${m.unit})`).join(', ')}</td>
                  <td style={{ fontWeight: 600, color: '#c084fc' }}>{o.total}</td>
                  <td>{o.orderDate}</td>
                  <td>
                    <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, ...(statusColors[o.status] || {}) }}>
                      {o.status}
                    </span>
                  </td>
                  <td>
                    {o.status !== 'Delivered' && (
                      <select className="sb-select" style={{ padding: '6px 10px', fontSize: '12px', minWidth: '100px' }}
                        value={o.status} onChange={e => handleStatusChange(o.id, e.target.value)}>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>In Transit</option>
                        <option>Delivered</option>
                      </select>
                    )}
                    {o.status === 'Delivered' && <span style={{ color: '#2ecc71', fontSize: '13px' }}>✓ Complete</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orderstatus;