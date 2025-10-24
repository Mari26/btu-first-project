import React from 'react';
import { useNotification } from '../context/NotificationContext';


const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <Notification
          key={n.id}
          message={n.message}
          type={n.type}
          onClose={() => removeNotification(n.id)} 
        />
      ))}
    </div>
  );
};

const Notification = ({ message, type, onClose }) => {
  const notificationClassName = `notification ${type}`;

  return (
    <div className={notificationClassName}>
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">&times;</button>
    </div>
  );
};

export default NotificationContainer;