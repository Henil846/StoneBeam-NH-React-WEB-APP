import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import './shared.css';

// ─── Toast Context ───
const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 300);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(t => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, toast.duration || 3500);
    return () => clearTimeout(timer);
  }, [toast.duration, onClose]);

  const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };
  return (
    <div className={`toast-item ${toast.type} ${toast.exiting ? 'toast-exit' : ''}`}>
      <span className="toast-icon">{icons[toast.type] || 'ℹ'}</span>
      <span className="toast-message">{toast.message}</span>
      <button className="toast-close" onClick={onClose}>×</button>
    </div>
  );
};

// ─── Modal ───
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

// ─── Empty State ───
export const EmptyState = ({ icon = '📭', title, message, action }) => (
  <div className="empty-state">
    <div className="empty-state-icon">{icon}</div>
    <h3>{title || 'Nothing here yet'}</h3>
    <p>{message || 'No data to display.'}</p>
    {action}
  </div>
);

// ─── Loading Spinner ───
export const LoadingSpinner = ({ text }) => (
  <div className="loading-container">
    <div className="spinner"></div>
    {text && <span className="spinner-text">{text}</span>}
  </div>
);

// ─── Search Bar ───
export const SearchBar = ({ placeholder, value, onChange, filters, onFilterChange, filterValue }) => (
  <div className="search-bar-wrapper">
    <div className="search-input-group">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    {filters && (
      <select className="filter-select" value={filterValue || ''} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        {filters.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
      </select>
    )}
  </div>
);

// ─── User Card ───
export const UserCard = ({ user, onConnect, onView, onSave, isSaved }) => {
  const getAvatarColor = (name) => {
    const colors = ['#7b2cbf', '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar" style={{ background: getAvatarColor(user.name) }}>{initials}</div>
        <div className="user-card-info">
          <h4>{user.name} {user.verified && <span className="verified-badge" title="Verified">✓</span>}</h4>
          {user.company && <p className="user-company">{user.company}</p>}
        </div>
        {onSave && (
          <button className={`btn-sb-icon ${isSaved ? 'active' : ''}`} onClick={onSave} title={isSaved ? 'Unsave' : 'Save'}>
            {isSaved ? '❤' : '♡'}
          </button>
        )}
      </div>
      <div className="user-card-meta">
        <span>📍 {user.location}</span>
        {user.experience && <span>💼 {user.experience}</span>}
        <span className="user-card-rating">⭐ {user.rating} ({user.reviews})</span>
      </div>
      {user.bio && <p className="user-card-bio">{user.bio}</p>}
      {user.specializations?.length > 0 && (
        <div className="user-card-tags">
          {user.specializations.slice(0, 3).map((s, i) => <span key={i} className="user-card-tag">{s}</span>)}
        </div>
      )}
      <div className="user-card-actions">
        {onView && <button className="btn-sb btn-sb-outline btn-sb-sm" onClick={onView}>View Profile</button>}
        {onConnect && <button className="btn-sb btn-sb-primary btn-sb-sm" onClick={onConnect}>Connect</button>}
      </div>
    </div>
  );
};

// ─── Project Card ───
export const ProjectCard = ({ project, onView, onEdit, onDelete, onSave, isSaved }) => {
  const statusClass = project.status?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h4>{project.title}</h4>
        <span className={`project-status ${statusClass}`}>{project.status}</span>
      </div>
      <p className="project-card-desc">{project.description}</p>
      <div className="project-card-meta">
        <span>📍 {project.location}</span>
        <span>💰 {project.budget}</span>
        <span>🏗 {project.type}</span>
      </div>
      {typeof project.progress === 'number' && (
        <>
          <div className="project-progress-bar">
            <div className="project-progress-fill" style={{ width: `${project.progress}%` }}></div>
          </div>
          <div className="project-progress-text">{project.progress}% complete</div>
        </>
      )}
      <div className="project-card-actions">
        {onView && <button className="btn-sb btn-sb-outline btn-sb-sm" onClick={onView}>View Details</button>}
        {onEdit && <button className="btn-sb btn-sb-primary btn-sb-sm" onClick={onEdit}>Edit</button>}
        {onDelete && <button className="btn-sb btn-sb-danger btn-sb-sm" onClick={onDelete}>Delete</button>}
        {onSave && (
          <button className={`btn-sb-icon ${isSaved ? 'active' : ''}`} onClick={onSave}>
            {isSaved ? '❤' : '♡'}
          </button>
        )}
      </div>
    </div>
  );
};
