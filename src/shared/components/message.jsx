import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';

const Message = ({ type, title, message, className, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
      const container = document.getElementsByClassName('message')[0];
      ReactDOM.unmountComponentAtNode(container);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Alert color={type} isOpen={visible} toggle={handleClose} className={`message ${className}`}>
      {title && <h4 className="alert-heading">{title}</h4>}
      <p>{message}</p>
    </Alert>
  );
};

export default Message;
