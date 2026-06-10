import { createContext, useContext, useState, useEffect } from 'react';
import API_BASE from '../config/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('sb_auth');
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch { localStorage.removeItem('sb_auth'); }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');

    const userData = {
      id: data.user.id,
      email: data.user.email,
      role: data.user.role,
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      ...data.user,
    };
    setCurrentUser(userData);
    localStorage.setItem('sb_auth', JSON.stringify(userData));
    return userData;
  };

  const signup = async (userData) => {
    if (!userData.email || !userData.password || !userData.name) {
      throw new Error('Name, email, and password are required');
    }

    // Convert "Skilled Labourer" to "Skilled-Labourer" for backend enum
    const backendRole = (userData.role || 'Client').replace(' ', '-');

    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone || '',
        role: backendRole,
        location: userData.location || 'Ahmedabad, Gujarat',
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');

    const newUser = {
      id: data.user.id,
      name: userData.name,
      email: data.user.email,
      role: userData.role || 'Client',
      phone: userData.phone || '',
      location: userData.location || 'Ahmedabad, Gujarat',
      company: userData.company || '',
      bio: '',
      avatar: null,
      verified: false,
      createdAt: new Date().toISOString(),
    };
    setCurrentUser(newUser);
    localStorage.setItem('sb_auth', JSON.stringify(newUser));
    return newUser;
  };

  const logout = async () => {
    try {
      await fetch(`${API_BASE}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error('Logout API error:', err);
    }
    setCurrentUser(null);
    localStorage.removeItem('sb_auth');
  };

  const updateProfile = (updates) => {
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    localStorage.setItem('sb_auth', JSON.stringify(updated));
    // Also update in users list
    const users = JSON.parse(localStorage.getItem('sb_users') || '[]');
    const idx = users.findIndex(u => u.id === updated.id);
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...updates };
      localStorage.setItem('sb_users', JSON.stringify(users));
    }
    return updated;
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
