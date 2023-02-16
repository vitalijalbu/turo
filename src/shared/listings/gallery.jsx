import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { ButtonGroup, Button } from "reactstrap";
import PopupMedia from "@/shared/listings/popup-media";
import { IconPhoto } from '@tabler/icons-react';

const Gallery = ({ media }) => {
  const [popupMedia, setMediaPopup] = useState(false);
       /* Toggle Item Popup */
       const toggleMediaPopup = () => {
        setMediaPopup(!popupMedia);
      };

  return (
    <>
    {popupMedia && <PopupMedia opened={popupMedia} toggle={toggleMediaPopup}/>}
    <div className="it-grid-list-wrapper it-quilted-grid">
  <div className="grid-row grid">
    <div className="col-12 col-md-6">
      <div className="it-grid-item-wrapper it-grid-item-overlay">
        <a href="#" onClick={toggleMediaPopup}>
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <div className="img-wrapper">
                <img
                  src={media ? media[0].url : '/img/placeholder.svg'}
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
             <a href="#" onClick={toggleMediaPopup}>
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src={media ? media[1].url : '/img/placeholder.svg'}
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
             <a href="#" onClick={toggleMediaPopup}>
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src={media ? media[2].url : '/img/placeholder.svg'}
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
             <a href="#" onClick={toggleMediaPopup}>
              <div className="img-responsive-wrapper it-grid-item-overlay">
                <div className="img-responsive">
                  <div className="img-wrapper">
                    <img
                      src={media ? media[3].url : '/img/placeholder.svg'}
                      alt="descrizione immagine"
                    />
                  </div>
                </div>
              </div>
              <span class="it-griditem-text-wrapper">
          <span class="it-griditem-text"><Button outline color="white" size="sm"><IconPhoto/> Vedi tutte le foto</Button></span>
        </span>
            </a>
          </div>
        </div>
      </div>
    </div>


      <ButtonGroup className="gallery-cta">
      <Button color="white" onClick={() => toggleMediaPopup('photos')}>Vedi più foto</Button>
      <Button color="white" onClick={() => toggleMediaPopup('planimetry')}>Pianimetria</Button>
      <Button color="white" onClick={() => toggleMediaPopup('video')}>Video</Button>
      <Button color="white" onClick={() => toggleMediaPopup('tour')}>360° Tour</Button>
    </ButtonGroup>
    </div>
    </div>
    </>
  );
}
export default Gallery;