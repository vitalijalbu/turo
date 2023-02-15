import React, { useState } from "react";
import { Card, Button, Badge } from "reactstrap";
import Link from "next/link";
import { IconArrowAutofitContent, IconHeart, IconShare, IconStairs, IconMapPin } from '@tabler/icons-react';
import ListingSwiper from "./listing-swiper";


const ListingItem = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    console.log('added')
  };

  return (
    <Card className="p-2 mb-3">
    <div className="row g-0">
      {/* Card img */}
      <div className="col-md-5 position-relative">
        {/* Slider START */}
        <Link href={`/listings/${data.id}`}><ListingSwiper media={data?.media_photos} /></Link>
        {/* Slider END */}
      </div>
      {/* Card body */}
      <div className="col-md-7">
        <div className="card-body py-md-2 d-flex flex-column h-100 position-relative">
        <div className="d-flex justify-content-between align-items-center">
          {/* Rating and buttons */}
          <Link href={`/search?city=${data.location.parts ? data.location.parts.city : null}`} className="mb-2 text-primary">
          <span>
            <IconMapPin/> {data.location ? data.location.parts.city : null}
          </span>
          </Link>
          <ul className="list-inline mb-0 z-index-2">
              {/* Heart icon */}
              <li className="list-inline-item">
              <Button color="link"><IconHeart onClick={() => addToFavorite()}/></Button>
              </li>
              {/* Share icon */}
              <li className="list-inline-item dropdown">
              <Button color="link"><IconShare /></Button>
              </li>
            </ul>
            </div>
                      {/* Title */}
          <h5 className="card-title d-block">
          <Link href={`/listings/${data.id}`}>{data.title}</Link>
          </h5>
          {data.category.length > 0 ? (<div><span className="badge rounded-pill text-bg-primary">{data.category[0].title}</span></div>) : null}
          {/* Amenities */}
          <ul className="d-flex list-unstyled my-3">
            <li className="me-3">
            <span>Locali</span> 
              <span className="fw-bold d-block">{data.totalRooms ? data.totalRooms : '-'}</span>
            </li>
            <li className="me-3">
            <span>Mq</span> 
              <span className="fw-bold d-block">{data.superficieTotale ? `${data.superficieTotale} mq` : '-'}</span>
            </li>
            <li className="me-3">
              <span>Anno costruzione</span>
            <span className="fw-bold d-block">{data.yearConstruction ? data.yearConstruction  : '-'}</span>
            </li>
            <li className="me-3">
                <span>Stato</span>
              <span className="fw-bold d-block">{data.property_status ? data.property_status : '-'}</span>
            </li> 
          </ul>
          {/* Price and Button */}
          <div>
            <hr />
         
          <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            {/* Button */}

              <Link href={`/hosts/${data.author.id}`} target="_blank" className="d-flex align-items-center">
                <div className="avatar avatar-sm">
                  <img
                    className="avatar-img rounded-circle"
                    src="https://via.placeholder.com/80"
                    alt="avatar"
                  />
                </div>
                <div className="ms-2">
										<h6 className="mb-0">{data.author.fullName}</h6>
									</div>
              </Link>
    
            <div className="d-flex align-items-center text-primary">
              <h5 className="fw-bold mb-0 me-1">{data.pricing ? data.pricing : "Trattativa riservata"}</h5>
            </div> 
          </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
  
  )
}

export default ListingItem;
