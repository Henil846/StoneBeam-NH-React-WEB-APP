import { useState } from 'react';
import { mockAttendance } from '../../data/mockData';
import { useToast } from '../shared/SharedComponents';
import '../../components/shared/shared.css';

const Attendance = () => {
  const { addToast } = useToast();
  const [records, setRecords] = useState(mockAttendance);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setCheckedIn(true);
    addToast(`Checked in at ${time} ✅`, 'success');
  };

  const handleCheckOut = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setCheckedIn(false);
    addToast(`Checked out at ${time} 👋`, 'info');
  };

  const statusColors = { 'Present': '#2ecc71', 'Absent': '#e74c3c', 'Weekend': '#f39c12' };

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section"><h2>Attendance</h2><p>Track your daily attendance</p></div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
        <button className="btn-sb btn-sb-primary" onClick={handleCheckIn} disabled={checkedIn}>
          🕐 {checkedIn ? 'Checked In' : 'Check In'}
        </button>
        <button className="btn-sb btn-sb-outline" onClick={handleCheckOut} disabled={!checkedIn}>
          🕐 Check Out
        </button>
      </div>

      <div className="stats-row" style={{ marginBottom: '24px' }}>
        <div className="stat-card"><h3>{records.filter(r => r.status === 'Present').length}</h3><p>Days Present</p></div>
        <div className="stat-card"><h3>{records.filter(r => r.status === 'Absent').length}</h3><p>Days Absent</p></div>
        <div className="stat-card"><h3>{records.reduce((a, r) => a + r.hours, 0).toFixed(1)}</h3><p>Total Hours</p></div>
      </div>

      <div className="sb-table-wrapper">
        <table className="sb-table">
          <thead><tr><th>Date</th><th>Check In</th><th>Check Out</th><th>Hours</th><th>Status</th></tr></thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td>{r.checkIn || '—'}</td>
                <td>{r.checkOut || '—'}</td>
                <td>{r.hours || '—'}</td>
                <td><span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: `${statusColors[r.status]}20`, color: statusColors[r.status] }}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;