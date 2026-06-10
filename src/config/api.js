// Central API configuration
// In production (GitHub Pages), use the Vercel backend
// In development (localhost), use local backend
const API_BASE =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api'
    : 'https://stonebeam-nh-backend.vercel.app/api';

export default API_BASE;
