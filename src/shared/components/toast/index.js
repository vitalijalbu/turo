import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PopupConfirm from './popup-toast';

const toast = (props) => {
  return new Promise((resolve) => {
    let el = document.createElement('div');
    const handleResolve = (result) => {
      unmountComponentAtNode(el);
      el = null;
      resolve(result);
    };
    render(<PopupConfirm {...props} onClose={handleResolve} />, el);
  });
};

export default toast;