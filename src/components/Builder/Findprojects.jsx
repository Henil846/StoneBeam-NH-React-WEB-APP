import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useToast } from '../shared/SharedComponents';
import { ProjectCard, SearchBar, EmptyState, Modal } from '../shared/SharedComponents';
import { PROJECT_TYPES } from '../../data/mockData';
import '../../components/shared/shared.css';

const Findprojects = () => {
  const { projects, toggleSaved, isSaved } = useData();
  const { addToast } = useToast();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [viewProject, setViewProject] = useState(null);

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !filter || p.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>Find Projects</h2>
        <p>Search and connect with available construction projects</p>
      </div>

      <SearchBar placeholder="Search by name or location..." value={search} onChange={setSearch}
        filters={PROJECT_TYPES.map(t => ({ value: t, label: t }))} filterValue={filter} onFilterChange={setFilter} />

      {filtered.length === 0 ? (
        <EmptyState icon="🔍" title="No projects found" message="Try adjusting your search or filters." />
      ) : (
        <div className="cards-grid cards-grid-2">
          {filtered.map(p => (
            <ProjectCard key={p.id} project={p} onView={() => setViewProject(p)}
              onSave={() => { toggleSaved(p.id, 'project'); addToast(isSaved(p.id, 'project') ? 'Removed from saved' : 'Project saved!', 'info'); }}
              isSaved={isSaved(p.id, 'project')} />
          ))}
        </div>
      )}

      <Modal isOpen={!!viewProject} onClose={() => setViewProject(null)} title={viewProject?.title}
        footer={<button className="btn-sb btn-sb-primary" onClick={() => { addToast('Application sent! The project owner will be notified.', 'success'); setViewProject(null); }}>📩 Apply for Project</button>}>
        {viewProject && (
          <div style={{ display: 'grid', gap: '10px', fontSize: '14px' }}>
            <p>{viewProject.description}</p>
            <div><strong>Budget:</strong> {viewProject.budget}</div>
            <div><strong>Type:</strong> {viewProject.type}</div>
            <div><strong>Location:</strong> {viewProject.location}</div>
            <div><strong>Status:</strong> {viewProject.status}</div>
            <div><strong>Progress:</strong> {viewProject.progress}%</div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Findprojects;