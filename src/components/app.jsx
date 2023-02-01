import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';

import routes from '../js/routes';


const MyApp = () => {

  // Framework7 Parameters
  const f7params = {
    name: 'My App', // App name
      theme: 'aurora', // Automatic theme detection
      url: document.location.href,
      // App routes
      routes: routes,
  };

  f7ready(() => {
    console.log('document.location.href', document.location.href);

    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>
     
    <Header />
   {/* Your main view, should have "view-main" class url="/"*/}
   <View 
       main
       passRouteParamsToRequest={true}
       browserHistory={true}
       browserHistorySeparator=""
       browserHistoryInitialMatch={true}
       browserHistoryStoreHistory={false}>

   </View>
  
   <Footer />
 </App>
  )
}
export default MyApp;