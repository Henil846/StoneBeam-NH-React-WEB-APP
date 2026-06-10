import { useState } from 'react';
import { mockUsers } from '../../data/mockData';
import { useData } from '../../context/DataContext';
import { useToast } from '../shared/SharedComponents';
import { UserCard, SearchBar, EmptyState, Modal } from '../shared/SharedComponents';
import '../../components/shared/shared.css';

const FindPeople = ({ role, title, subtitle }) => {
  const { toggleSaved, isSaved } = useData();
  const { addToast } = useToast();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [viewUser, setViewUser] = useState(null);

  const people = mockUsers.filter(u => u.role === role);
  const locations = [...new Set(people.map(u => u.location))];

  const filtered = people.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.company?.toLowerCase().includes(search.toLowerCase()) ||
      u.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !filter || u.location === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <SearchBar placeholder={`Search ${role.toLowerCase()}s...`} value={search} onChange={setSearch}
        filters={locations.map(l => ({ value: l, label: l }))} filterValue={filter} onFilterChange={setFilter} />

      {filtered.length === 0 ? (
        <EmptyState icon="👥" title={`No ${role.toLowerCase()}s found`} message="Try adjusting your search or filters." />
      ) : (
        <div className="cards-grid cards-grid-2">
          {filtered.map(u => (
            <UserCard key={u.id} user={u}
              onView={() => setViewUser(u)}
              onConnect={() => addToast(`Connection request sent to ${u.name}! 🤝`, 'success')}
              onSave={() => { toggleSaved(u.id, 'user'); addToast(isSaved(u.id, 'user') ? 'Removed from saved' : 'Saved!', 'info'); }}
              isSaved={isSaved(u.id, 'user')} />
          ))}
        </div>
      )}

      <Modal isOpen={!!viewUser} onClose={() => setViewUser(null)} title={viewUser?.name}
        footer={<button className="btn-sb btn-sb-primary" onClick={() => { addToast(`Message sent to ${viewUser?.name}!`, 'success'); setViewUser(null); }}>💬 Send Message</button>}>
        {viewUser && (
          <div style={{ display: 'grid', gap: '12px', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '14px', background: 'linear-gradient(135deg,#7b2cbf,#9d4edd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700' }}>
                {viewUser.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#fff' }}>{viewUser.name} {viewUser.verified && '✓'}</h4>
                <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>{viewUser.company || viewUser.role}</p>
              </div>
            </div>
            <div><strong>📍 Location:</strong> {viewUser.location}</div>
            <div><strong>📧 Email:</strong> {viewUser.email}</div>
            <div><strong>📞 Phone:</strong> {viewUser.phone}</div>
            {viewUser.experience && <div><strong>💼 Experience:</strong> {viewUser.experience}</div>}
            <div><strong>⭐ Rating:</strong> {viewUser.rating} ({viewUser.reviews} reviews)</div>
            <div><strong>📝 Bio:</strong> {viewUser.bio}</div>
            {viewUser.specializations?.length > 0 && (
              <div>
                <strong>🏷 Specializations:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {viewUser.specializations.map((s, i) => <span key={i} className="user-card-tag">{s}</span>)}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FindPeople;
