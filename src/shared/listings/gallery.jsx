import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Button, ButtonGroup } from "@chakra-ui/react";
import PopupMedia from "@/shared/listings/popup-media";
import { IconPhoto } from "@tabler/icons-react";

const Gallery = ({ media }) => {
  const [popupMedia, setMediaPopup] = useState(false);
  /* Toggle Item Popup */
  const toggleMediaPopup = () => {
    setMediaPopup(!popupMedia);
  };

  return (
    <>
      {popupMedia && (
        <PopupMedia opened={popupMedia} toggle={toggleMediaPopup} />
      )}
      <div className="it-grid-list-wrapper it-quilted-grid">
        <div className="grid-row grid">
          <div className="col-12 col-md-8">
            <div className="it-grid-item-wrapper it-grid-item-overlay">
              <a href="#" onClick={toggleMediaPopup}>
                <div className="img-responsive-wrapper">
                  <div className="img-responsive">
                    <div className="img-wrapper">
                      <img
                        src={media ? media[0].url : "/img/placeholder.svg"}
                        alt="descrizione immagine"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="grid-row grid">
              <div className="col-12">
                <div className="it-grid-item-wrapper it-grid-item-overlay">
                  <a href="#" onClick={toggleMediaPopup}>
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive">
                        <div className="img-wrapper">
                          <img
                            src={media ? media[1].url : "/img/placeholder.svg"}
                            alt="descrizione immagine"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="it-grid-item-wrapper it-grid-item-overlay">
                  <a href="#" onClick={toggleMediaPopup}>
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive">
                        <div className="img-wrapper">
                          <img
                            src={media ? media[2].url : "/img/placeholder.svg"}
                            alt="descrizione immagine"
                          />
                        </div>
                      </div>
                    </div>
                  </a>

                  <span className="it-griditem-text-wrapper">
                    <span className="it-griditem-text">
                      <Button
                        colorScheme="blackAlpha"
                        size="sm"
                        leftIcon={<IconPhoto />}
                      >
                        Vedi tutte le foto
                      </Button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ButtonGroup
            colorScheme="blackAlpha"
            spacing="1"
            size="sm"
            className="gallery-cta"
          >
            <Button onClick={() => toggleMediaPopup("photos")}>
              Vedi più foto
            </Button>
            <Button onClick={() => toggleMediaPopup("planimetry")}>
              Pianimetria
            </Button>
            <Button onClick={() => toggleMediaPopup("video")}>Video</Button>
            <Button onClick={() => toggleMediaPopup("tour")}>360° Tour</Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};
export default Gallery;
