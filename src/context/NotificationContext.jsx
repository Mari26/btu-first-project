import React, { createContext, useState, useContext, useCallback } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
});


export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const addNotification = useCallback((notification) => {

    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { id, ...notification };

    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      removeNotification(id);
    }, 3000);

  }, [removeNotification]); 

  const value = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

// დამხმარე Hook-ი ასე ჯობიაო დაგუგვლისას, მარა აშკარად ჩემს ედიტორს არვიცი არმოწმონს :()

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  return useContext(NotificationContext);
};