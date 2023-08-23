// AlertMessage.js
import React from 'react';

const AlertMessage = ({ message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className={`${getBackgroundColor()} text-white p-3 rounded-md shadow-md mb-4`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold">{message}</span>
        <button onClick={onClose} className="text-white">
          &times;
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
