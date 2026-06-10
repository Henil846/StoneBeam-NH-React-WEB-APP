import { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { mockGuides } from '../../data/mockData';
import { SearchBar, EmptyState, Modal } from '../shared/SharedComponents';
import '../../components/shared/shared.css';

const categories = [...new Set(mockGuides.map(g => g.category))];
const catColors = { Materials: '#7b2cbf', Planning: '#3498db', Legal: '#e67e22', Safety: '#e74c3c', Sustainability: '#2ecc71', Techniques: '#9b59b6' };

const Guides = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [viewGuide, setViewGuide] = useState(null);

  const filtered = mockGuides.filter(g => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !filter || g.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ background: 'var(--sb-bg-primary)', minHeight: '100vh' }}>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
        <div className="page-title-section" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', color: '#fff' }}>📚 Construction Guides</h2>
          <p style={{ color: '#888' }}>Expert guides for every aspect of construction</p>
        </div>

        <SearchBar placeholder="Search guides..." value={search} onChange={setSearch}
          filters={categories.map(c => ({ value: c, label: c }))} filterValue={filter} onFilterChange={setFilter} />

        {filtered.length === 0 ? (
          <EmptyState icon="📚" title="No guides found" message="Try a different search term." />
        ) : (
          <div className="cards-grid cards-grid-2">
            {filtered.map(g => (
              <div key={g.id} className="project-card" style={{ cursor: 'pointer' }} onClick={() => setViewGuide(g)}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: `${catColors[g.category] || '#7b2cbf'}20`, color: catColors[g.category] || '#c084fc' }}>{g.category}</span>
                  <span style={{ color: '#666', fontSize: '12px' }}>📖 {g.readTime}</span>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '8px', fontSize: '16px' }}>{g.title}</h4>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.6 }}>{g.description}</p>
              </div>
            ))}
          </div>
        )}

        <Modal isOpen={!!viewGuide} onClose={() => setViewGuide(null)} title={viewGuide?.title}>
          {viewGuide && (
            <div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: `${catColors[viewGuide.category] || '#7b2cbf'}20`, color: catColors[viewGuide.category] || '#c084fc' }}>{viewGuide.category}</span>
                <span style={{ color: '#666', fontSize: '12px' }}>📖 {viewGuide.readTime}</span>
              </div>
              <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '14px' }}>{viewGuide.content}</p>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default Guides;