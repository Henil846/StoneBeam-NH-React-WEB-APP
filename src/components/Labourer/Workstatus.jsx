import { mockWorkStatus } from '../../data/mockData';
import '../../components/shared/shared.css';

const Workstatus = () => (
  <div className="fade-in" style={{ color: '#fff' }}>
    <div className="page-title-section"><h2>Work Status</h2><p>Your daily work progress and tasks</p></div>
    <div className="sb-table-wrapper">
      <table className="sb-table">
        <thead><tr><th>Date</th><th>Task</th><th>Site</th><th>Hours</th><th>Supervisor</th><th>Status</th></tr></thead>
        <tbody>
          {mockWorkStatus.map(w => (
            <tr key={w.id}>
              <td>{w.date}</td>
              <td style={{ maxWidth: '200px' }}>{w.task}</td>
              <td>{w.site}</td>
              <td>{w.hoursWorked}h</td>
              <td>{w.supervisor}</td>
              <td><span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'rgba(46,204,113,0.15)', color: '#2ecc71' }}>{w.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Workstatus;