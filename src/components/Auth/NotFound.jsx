import { Link } from 'react-router-dom';
import './Auth.css';

const NotFound = () => (
  <div className="not-found-page">
    <div>
      <div className="not-found-code text-gradient">404</div>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-sb btn-sb-primary" style={{ display: 'inline-flex' }}>← Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
