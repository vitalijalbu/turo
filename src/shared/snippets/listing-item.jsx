import React, { useState } from "react";
import { Card, Button } from "reactstrap";
import Link from "next/link";
import { IconHeart, IconShare, IconPlus, IconStairs, IconMapPin } from '@tabler/icons-react';
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
          <Link href={`/search?city=${data.location.parts ? data.location.parts.city : null}`} className="mb-2">
          <span>
            <IconMapPin/> {data.location ? data.location.parts.city : null}
          </span>
          </Link>
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
                      {/* Title */}
          <h5 className="card-title d-block">
          <Link href={`/listings/${data.id}`}>{data.title}</Link>
          </h5>

          

          
          {/* Amenities */}
          <ul className="list-group-flush mb-0 mt-2">
            <li className="list-group-item d-flex py-1">
              <IconStairs/>
              {data.total_floors}
            </li>
            <li className="list-group-item d-flex py-1">
            <IconStairs/>
              Free Breakfast
            </li> 
            <li className="list-group-item d-flex py-1">
            {`Anno costruzione ${data?.year_construction}`}
            </li>
          </ul>
          {/* Price and Button */}
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
  </Card>
  
  )
}

export default ListingItem;
