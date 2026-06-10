import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useToast } from '../shared/SharedComponents';
import { ProjectCard, EmptyState, Modal } from '../shared/SharedComponents';
import { LOCATIONS, PROJECT_TYPES } from '../../data/mockData';
import API_BASE from '../../config/api';
import '../../components/shared/shared.css';
import './Createprojects.component.css';
const Createprojects = () => {
  const { projects, addProject, deleteProject } = useData();
  const { addToast } = useToast();
  const [form, setForm] = useState({ title: '', description: '', budget: '', location: 'Ahmedabad, Gujarat', type: 'Residential', startDate: '', endDate: '' });
  const [errors, setErrors] = useState({});
  const [viewProject, setViewProject] = useState(null);

  const update = (k, v) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Project name is required';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.budget.trim()) e.budget = 'Budget is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${API_BASE}/createProject/createProject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          projectName: form.title,
          Description: form.description,
          Budget: Number(form.budget.replace(/,/g, '')),
          ProjectType: form.type,
          Location: form.location,
          StartDate: form.startDate,
          ProjectDuration: Number(form.duration) || 1,
          DurationUnit: form.durationType || 'Months',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // Also add to local state for immediate UI update
      addProject({ ...form, budget: `₹${form.budget}` });
      addToast('Project created successfully! 🎉', 'success');
      setForm({ title: '', description: '', budget: '', location: 'Ahmedabad, Gujarat', type: 'Residential', startDate: '', endDate: '', duration: '', durationType: 'Months' });
    } catch (err) {
      addToast(err.message || 'Failed to create project', 'error');
    }
  };

  const handleDelete = (id) => {
    deleteProject(id);
    addToast('Project deleted', 'info');
  };

  return (
    <div className="fade-in" style={{ color: '#fff' }}>
      <div className="page-title-section">
        <h2>Create Project</h2>
        <p>Post a new construction project</p>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '700px', marginBottom: '40px', padding: '28px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="sb-form-group">
          <label>Project Name <span className="required">*</span></label>
          <input className="sb-input" placeholder="e.g. Luxury Villa Construction" value={form.title} onChange={e => update('title', e.target.value)} />
          {errors.title && <div className="sb-form-error">{errors.title}</div>}
        </div>
        <div className="sb-form-group">
          <label>Description <span className="required">*</span></label>
          <textarea className="sb-textarea" placeholder="Describe the project scope, requirements..." value={form.description} onChange={e => update('description', e.target.value)} rows={4} />
          {errors.description && <div className="sb-form-error">{errors.description}</div>}
        </div>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Budget (₹) <span className="required">*</span></label>
            <input className="sb-input" placeholder="e.g. 25,00,000" value={form.budget} onChange={e => update('budget', e.target.value)} />
            {errors.budget && <div className="sb-form-error">{errors.budget}</div>}
          </div>
          <div className="sb-form-group">
            <label>Project Type</label>
            <select className="sb-select" value={form.type} onChange={e => update('type', e.target.value)}>
              {PROJECT_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="sb-form-row">
          <div className="sb-form-group">
            <label>Location</label>
            <select className="sb-select" value={form.location} onChange={e => update('location', e.target.value)}>
              {LOCATIONS.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="sb-form-group">
            <label>Start Date</label>
            <input className="sb-input" type="date" value={form.startDate} onChange={e => update('startDate', e.target.value)} />
          </div>
        <div className="dark-theme">
  <div className="sb-form-group">
    <label>Project Duration</label>

    <div className="duration-row">
      <input
        className="sb-input"
        type="number"
        placeholder="Enter duration"
        value={form.duration}
        onChange={e => update('duration', e.target.value)}
      />

      <select
        className="sb-input"
        value={form.durationType}
        onChange={e => update('durationType', e.target.value)}
      >
        <option value="days">Days</option>
        <option value="months">Months</option>
        <option value="years">Years</option>
      </select>
    </div>
  </div>
</div>
</div>
        <button className="btn-sb btn-sb-primary" type="submit" style={{ marginTop: '8px' }}>🚀 Create Project</button>
      </form>

      <div className="section-header">
        <h2>Your Projects ({projects.length})</h2>
      </div>
      {projects.length === 0 ? (
        <EmptyState icon="📋" title="No projects yet" message="Create your first project above to get started." />
      ) : (
        <div className="cards-grid cards-grid-2">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onView={() => setViewProject(p)} onDelete={() => handleDelete(p.id)} />
          ))}
        </div>
      )}

      <Modal isOpen={!!viewProject} onClose={() => setViewProject(null)} title={viewProject?.title}>
        {viewProject && (
          <div>
            <p style={{ marginBottom: '12px' }}>{viewProject.description}</p>
            <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
              <div><strong>Budget:</strong> {viewProject.budget}</div>
              <div><strong>Type:</strong> {viewProject.type}</div>
              <div><strong>Location:</strong> {viewProject.location}</div>
              <div><strong>Status:</strong> {viewProject.status}</div>
              <div><strong>Progress:</strong> {viewProject.progress}%</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Createprojects;