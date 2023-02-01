import React from 'react';
import { Page } from "framework7-react";


  const NotFoundPage = () => {
 
    return (
      <Page>
      <div className='container'>
        <img className="icon-img" src="https://marcoa69.sg-host.com/assets/images/icon_404.png" alt="404" />
        <h1>Page not found</h1>
        <p>Requested content not found.</p>
      </div>
      </Page>
    );
};

export default NotFoundPage;
