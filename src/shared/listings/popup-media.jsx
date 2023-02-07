import React, { useRef } from 'react';
import { Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import TabPhotos from './TabPhotos';
import TabPlanimetry from './TabPlanimetry';
import TabTour from './TabTour';
import TabVideo from './TabVideo';

const PopupMedia = ({ opened, toggle, data, props }) => {

  return (
    <Modal
    centered
    size="xl"
    fade={false}
    toggle={toggle}
    isOpen={opened}

  >
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
      <Nav tabs>
      <NavItem value="photos">Foto</NavItem>
        <NavItem value="planimetry">Pianimetria</NavItem>
        <NavItem value="video">Video</NavItem>
        <NavItem value="tour">Virtual Tour</NavItem>
          <NavItem>
            <NavLink
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
      <TabContent activeTab="1">
      <TabPane value="photos" pt="xs">
       <TabPhotos/>
      </TabPane>

      <TabPane value="planimetry" pt="xs">
      <TabPlanimetry/>
      </TabPane>  
      <TabPane value="video" pt="xs">
       <TabVideo/>
      </TabPane>

      <TabPane value="tour" pt="xs">
     <TabTour/>
      </TabPane>

  </TabContent>
    </ModalBody>
  </Modal>
  );
}
export default PopupMedia;