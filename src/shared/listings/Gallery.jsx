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
    <section className="card-grid pt-0">
  <div className="container">
    <div className="row g-2">
      {/* Image */}
      <div className="col-md-6">
        <a
          data-glightbox=""
          data-gallery="gallery"
          href="https://via.placeholder.com/800"
        >
          <div
            className="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
            style={{
              backgroundImage: "url(https://via.placeholder.com/800)",
              backgroundPosition: "center left",
              backgroundSize: "cover"
            }}
          >
            {/* Card hover element */}
            <div className="hover-element position-absolute w-100 h-100">
              <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-6">
        {/* Card item START */}
        <div className="row g-2">
          {/* Image */}
          <div className="col-12">
            <a
              data-glightbox=""
              data-gallery="gallery"
              href="assets/images/gallery/13.jpg"
            >
              <div
                className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                style={{
                  backgroundImage: "url(assets/images/gallery/13.jpg)",
                  backgroundPosition: "center left",
                  backgroundSize: "cover"
                }}
              >
                {/* Card hover element */}
                <div className="hover-element position-absolute w-100 h-100">
                  <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                </div>
              </div>
            </a>
          </div>
          {/* Image */}
          <div className="col-md-6">
            <a
              data-glightbox=""
              data-gallery="gallery"
              href="assets/images/gallery/12.jpg"
            >
              <div
                className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                style={{
                  backgroundImage: "url(assets/images/gallery/12.jpg)",
                  backgroundPosition: "center left",
                  backgroundSize: "cover"
                }}
              >
                {/* Card hover element */}
                <div className="hover-element position-absolute w-100 h-100">
                  <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                </div>
              </div>
            </a>
          </div>
          {/* Images */}
          <div className="col-md-6">
            <div
              className="card card-grid-sm overflow-hidden"
              style={{
                backgroundImage: "url(assets/images/gallery/11.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            >
              {/* Background overlay */}
              <div className="bg-overlay bg-dark opacity-7" />
              {/* Popup Images */}
              <a
                data-glightbox=""
                data-gallery="gallery"
                href="assets/images/gallery/11.jpg"
                className="stretched-link z-index-9"
              />
              <a
                data-glightbox=""
                data-gallery="gallery"
                href="assets/images/gallery/15.jpg"
              />
              <a
                data-glightbox=""
                data-gallery="gallery"
                href="assets/images/gallery/16.jpg"
              />
              {/* Overlay text */}
              <div className="card-img-overlay d-flex h-100 w-100">
                <h6 className="card-title m-auto fw-light text-decoration-underline">
                  <a href="#" className="text-white">
                    View all
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
      </div>
    </div>
  </div>
</section>

      <ButtonGroup className="gallery-cta">
      <Button onClick={toggleMediaPopup}>Vedi più foto</Button>
      <Button onClick={toggleMediaPopup}>Pianimetria</Button>
      <Button onClick={toggleMediaPopup}>Video</Button>
      <Button onClick={toggleMediaPopup}>360° Tour</Button>
    </ButtonGroup>
    </>
  );
}
export default Gallery;