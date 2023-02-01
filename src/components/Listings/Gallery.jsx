import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Segmented, Button } from 'framework7-react';
import GalleryPopup from "@/components/Listings/GalleryPopup";

const Gallery = ({ props }) => {
  const [popupGallery, setGalleryPopup] = useState(false);

       /* Toggle Item Popup */
       const openGalleryPopup = () => {
        setGalleryPopup(true);
      };
      const closeGalleryPopup = () => {
        setGalleryPopup(false);
      }; 
    
      
  return (
     <>
    <GalleryPopup
      opened={popupGallery} 
      close={closeGalleryPopup}
      refTab={"photos"}
    /> 
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
  </div>
  <div className="gallery-actions-btn">
  <Segmented round raised tag="p">
          <Button round small color="dark" onClick={openGalleryPopup} >Più foto</Button>
          <Button round small onClick={openGalleryPopup} >Pianimetria</Button>
          <Button round small onClick={openGalleryPopup}>Video</Button>
          <Button round small onClick={openGalleryPopup}>Tour guide</Button>
        </Segmented>
  </div>
</div>
</>
  );
}
export default Gallery;