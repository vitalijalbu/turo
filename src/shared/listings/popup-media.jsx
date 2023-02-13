import React, { useRef, useState } from 'react';
import { Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import TabPhotos from './TabPhotos';
import TabPlanimetry from './TabPlanimetry';
import TabTour from './TabTour';
import TabVideo from './TabVideo';

const PopupMedia = ({ opened, toggle, data, props, tab }) => {
  const [activeTab, setActiveTab] = useState('photos');
  
  const toggleTab = (value) => { 
    //console.log('tabs', value)
    if (activeTab !== value) {
      setActiveTab(value);
      console.log('tabs', activeTab)
    }
  }

  return (
    <Modal
    centered
    fullscreen
    fade={false}
    toggle={toggle}
    isOpen={opened}

  >
    <ModalHeader toggle={toggle}>Media annuncio</ModalHeader>
      <ModalBody>
      <Nav justified pills tabs className='py-2'>
        <NavItem><NavLink value="photos" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'photos'}>Foto </NavLink></NavItem>
        <NavItem><NavLink value="planimetry" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'planimetry'}>Pianimetria </NavLink></NavItem>
        <NavItem><NavLink value="video" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'video'}>Video </NavLink></NavItem>
        <NavItem><NavLink value="tour" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'tour'}>Virtual Tour </NavLink></NavItem>
        </Nav>
        <div className="tabs-modal py-4">
      <TabContent activeTab={activeTab}>
      <TabPane tabId="photos">
       <TabPhotos/>
      </TabPane>

      <TabPane tabId="planimetry">
      <TabPlanimetry/>
      </TabPane>  
      <TabPane tabId="video">
       <TabVideo/>
      </TabPane>

      <TabPane tabId="tour">
     <TabTour/>
      </TabPane>

  </TabContent>
  </div>
    </ModalBody>
  </Modal>
  );
}
export default PopupMedia;