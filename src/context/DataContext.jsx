import { createContext, useContext, useState, useEffect } from 'react';
import { mockProjects, mockOrders } from '../data/mockData';

const DataContext = createContext(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [orders, setOrders] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('sb_projects');
    const storedOrders = localStorage.getItem('sb_orders');
    const storedSaved = localStorage.getItem('sb_saved');

    setProjects(storedProjects ? JSON.parse(storedProjects) : [...mockProjects]);
    setOrders(storedOrders ? JSON.parse(storedOrders) : [...mockOrders]);
    setSavedItems(storedSaved ? JSON.parse(storedSaved) : []);
  }, []);

  const saveProjects = (data) => {
    setProjects(data);
    localStorage.setItem('sb_projects', JSON.stringify(data));
  };

  const saveOrders = (data) => {
    setOrders(data);
    localStorage.setItem('sb_orders', JSON.stringify(data));
  };

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: 'p_' + Date.now(),
      status: 'Planning',
      progress: 0,
      createdAt: new Date().toISOString(),
    };
    const updated = [newProject, ...projects];
    saveProjects(updated);
    addNotification('Project created successfully!', 'success');
    return newProject;
  };

  const updateProject = (id, updates) => {
    const updated = projects.map(p => p.id === id ? { ...p, ...updates } : p);
    saveProjects(updated);
    return updated.find(p => p.id === id);
  };

  const deleteProject = (id) => {
    const updated = projects.filter(p => p.id !== id);
    saveProjects(updated);
    addNotification('Project deleted', 'info');
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: 'o_' + Date.now(),
      status: 'Pending',
      orderDate: new Date().toISOString().split('T')[0],
      deliveryDate: null,
    };
    const updated = [newOrder, ...orders];
    saveOrders(updated);
    addNotification('Order placed successfully!', 'success');
    return newOrder;
  };

  const updateOrderStatus = (id, status) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    saveOrders(updated);
  };

  const toggleSaved = (itemId, type) => {
    const key = `${type}_${itemId}`;
    let updated;
    if (savedItems.includes(key)) {
      updated = savedItems.filter(s => s !== key);
    } else {
      updated = [...savedItems, key];
    }
    setSavedItems(updated);
    localStorage.setItem('sb_saved', JSON.stringify(updated));
  };

  const isSaved = (itemId, type) => savedItems.includes(`${type}_${itemId}`);

  const addNotification = (message, type = 'info') => {
    const notif = { id: Date.now(), message, type, time: new Date().toISOString() };
    setNotifications(prev => [notif, ...prev].slice(0, 20));
  };

  const clearNotifications = () => setNotifications([]);

  return (
    <DataContext.Provider value={{
      projects, orders, savedItems, notifications,
      addProject, updateProject, deleteProject,
      addOrder, updateOrderStatus,
      toggleSaved, isSaved,
      addNotification, clearNotifications,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
