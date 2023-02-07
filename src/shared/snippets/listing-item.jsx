import React, { useState } from "react";
import { Card, Button } from "reactstrap";
import { showNotification } from '@mantine/notifications';
import Link from "next/link";
import { IconHeart, IconShare, IconPlus, IconStairs } from '@tabler/icons-react';
import ListingSwiper from "./listing-swiper";


const ListingItem = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    showNotification({
      title: "L'annuncio è stato aggiunto ai preferiti.",
      autoClose: 2500,
    });
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
          {/* Rating and buttons */}
          <div className="d-flex justify-content-between align-items-center">
                      {/* Title */}
          <h3 className="card-title mb-1">
          <Link href={`/listings/${data.id}`}>{data.title}</Link>
          </h3>
          <small>
            <i className="bi bi-geo-alt me-2" />
            {data.location?.parts?.city}
          </small>
          
            <ul className="list-inline mb-0 z-index-2">
              {/* Heart icon */}
              <li className="list-inline-item">
              <Button outline><IconHeart size={16} onClick={() => addToFavorite()}/></Button>
              </li>
              {/* Share icon */}
              <li className="list-inline-item dropdown">
              <Button outline><IconShare size={16} /></Button>
              </li>
            </ul>
          </div>
  <ul className="list-inline mb-0">
              <li className="list-inline-item me-0 small">
                ciao
              </li>
              <li className="list-inline-item me-0 small">
               ico
              </li>
            </ul>

          {/* Amenities */}
          <ul className="nav nav-divider mt-3">
            <li className="nav-item">Air Conditioning</li>
            <li className="nav-item">Wifi</li>
            <li className="nav-item">Kitchen</li>
            <li className="nav-item">Pool</li>
          </ul>
          {/* List */}
          <ul className="list-group list-group-borderless small mb-0 mt-2">
            <li className="list-group-item d-flex text-success p-0">
              <i className="bi bi-patch-check-fill me-2" />
              Free Cancellation till 7 Jan 2022
            </li>
            <li className="list-group-item d-flex text-success p-0">
              <i className="bi bi-patch-check-fill me-2" />
              Free Breakfast
            </li>
          </ul>
          {/* Price and Button */}
          <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            {/* Button */}
            <div className="d-flex align-items-center">
              <h5 className="fw-bold mb-0 me-1">{data.pricing ? data.pricing : "Trattativa riservata"}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
  
  )
}

export default ListingItem;
