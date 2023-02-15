import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { getListingMedia } from "@/lib/graphql/queries/listings";
import { Container, Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import TabPhotos from './tab-photos';
import TabPlanimetry from './tab-planimetry';
import TabTour from './tab-tour';
import TabVideo from './tab-video';


const PopupMedia = ({ opened, toggle }) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [planimetry, setPlanimetry] = useState([]);
  const [entry, setEntry] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');
  
  const toggleTab = (value) => { 
    //console.log('tabs', value)
    if (activeTab !== value) {
      setActiveTab(value);
    }
  }

  useEffect(() => {
    getListingMedia(id)
      .then((data) => {
        setEntry(data?.entry || []);
        setPhotos(data?.entry.media_photos || []);
        setPlanimetry(data?.entry.media_planimetry || []);
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Modal
    centered
    fullscreen
    fade={false}
    toggle={toggle}
    isOpen={opened}

  >
    <ModalHeader toggle={toggle}/>
      <ModalBody>
        <Container>
      <Nav justified pills tabs className='py-2'>
        <NavItem><NavLink disabled={photos.length !== null} href="#" value="photos" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'photos'}>Foto </NavLink></NavItem>
        <NavItem><NavLink disabled={planimetry.length !== null} href="#" value="planimetry" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'planimetry'}>Pianimetria </NavLink></NavItem>
        <NavItem><NavLink disabled={entry?.linkVideo?.length !== null} href="#" value="video" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'video'}>Video </NavLink></NavItem>
        <NavItem><NavLink disabled={entry?.linkVirtualTour?.length !== null} href="#" value="tour" onClick={(e) => toggleTab(e.target.getAttribute('value'))} active={activeTab === 'tour'}>Virtual Tour </NavLink></NavItem>
        </Nav>
        <div className="tabs-modal py-4">
      <TabContent activeTab={activeTab}>
      <TabPane tabId="photos">
       <TabPhotos data={photos}/>
      </TabPane>

      <TabPane tabId="planimetry">
      <TabPlanimetry data={planimetry}/>
      </TabPane>  
      <TabPane tabId="video">
       <TabVideo data={entry?.linkVideo}/>
      </TabPane>

      <TabPane tabId="tour">
     <TabTour data={entry?.linkVirtualTour}/>
      </TabPane>

  </TabContent>
  </div>
  </Container>
    </ModalBody>
  </Modal>
  );
}
export default PopupMedia;