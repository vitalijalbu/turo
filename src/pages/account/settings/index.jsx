import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';

const Settings = () => {


  return (
    
    <Container>
    <div className="row g-5">
    <div className="col-md-4">
        <div className="position-sticky" style={{ top: "2rem" }}>
          <div className="p-4">
          <SideNav/>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 border-bottom">Impostazioni account</h3>
        <div>

    </div>
      </div>
    
    </div>
    
          </Container>
  );
};

export default Settings;
