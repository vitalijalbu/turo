import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { ButtonGroup, Button } from "reactstrap";
import MediaPopup from "@/shared/listings/MediaPopup";


const Gallery = ({ props }) => {
  const [popupMedia, setMediaPopup] = useState(false);
       /* Toggle Item Popup */
       const toggleMediaPopup = () => {
        setMediaPopup(!popupMedia);
      };

  return (
    <>
    {popupMedia && <MediaPopup opened={popupMedia} toggle={toggleMediaPopup}/>}
    <div className="it-grid-list-wrapper it-quilted-grid">
  <div className="grid-row grid">
    <div className="col-12 col-md-6">
      <div className="it-grid-item-wrapper it-grid-item-overlay">
        <a href="#">
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <div className="img-wrapper">
                <img
                  src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine"
                  alt="descrizione immagine"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="grid-row grid">
        <div className="col-6">
          <div className="it-grid-item-wrapper it-grid-item-overlay">
            <a href="#">
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine"
                      alt="descrizione immagine"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="it-grid-item-wrapper it-grid-item-overlay">
            <a href="#">
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine"
                      alt="descrizione immagine"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="it-grid-item-wrapper it-grid-item-overlay it-grid-item-double-w">
            <a href="#">
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine"
                      alt="descrizione immagine"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>


      <ButtonGroup className="gallery-cta">
      <Button onClick={toggleMediaPopup}>Vedi più foto</Button>
      <Button onClick={toggleMediaPopup}>Pianimetria</Button>
      <Button onClick={toggleMediaPopup}>Video</Button>
      <Button onClick={toggleMediaPopup}>360° Tour</Button>
    </ButtonGroup>
    </div>
    </div>
    </>
  );
}
export default Gallery;