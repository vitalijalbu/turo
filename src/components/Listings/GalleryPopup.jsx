import React, { useRef, useState, useEffect } from "react";
import {
  Page,
  Navbar,
  Icon,
  Button,
  Popup,
  NavRight,
  NavTitle,
  Toolbar,
  Link,
  Tabs,
  Tab,
  Block,
} from "framework7-react";
// Import Swiper React components
import TabPhotos from "./TabPhotos";
import TabPlanimetry from "./TabPlanimetry";



const GalleryPopup = ({ opened, close, refTab }) => {

  return (
    <Popup tabletFullscreen={true} opened={opened} onPopupClosed={close}>
      <Page className="page-popup">
        <Navbar>
          <NavTitle>Galleria foto</NavTitle>
          <NavRight>
            <Button className="close" onClick={close}>
              <Icon f7="xmark"></Icon>
            </Button>
          </NavRight>
        </Navbar>
      <div className="container">
        <Toolbar inner tabbar position="top">
          <Link tabLink="#photos" tabLinkActive>
            Foto
          </Link>
          <Link tabLink="#planimetry">Pianimetria</Link>
          <Link tabLink="#video">Video</Link>
          <Link tabLink="#tour">Virtual Tour</Link>
        </Toolbar>
        </div>
        <Tabs>
          <Tab id="photos" className="page-content" tabActive>
            <Block className="container">
            <TabPhotos photos={[]}/>
            </Block>
          </Tab>
          <Tab id="planimetry" className="page-content">
            <Block className="container">
              <TabPlanimetry photos={[]}/>
            </Block>
          </Tab>
          <Tab id="video" className="page-content">
            <Block className="container">
              <div className="video-responsive">
                <iframe
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/58vamK_A9Xg`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </Block>
          </Tab>
          <Tab id="tour" className="page-content">
            <Block className="container">
              <div id="block-virtualtour">
                <iframe
                  src="https://my.matterport.com/show/?m=kEorcMvZfd2"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen
                  allow="xr-spatial-tracking"
                  title="Tour 360°"
                ></iframe>
              </div>
            </Block>
          </Tab>
        </Tabs>
      </Page>
    </Popup>
  );
};
export default GalleryPopup;
