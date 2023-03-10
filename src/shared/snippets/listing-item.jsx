import React, { useState } from "react";
import { Avatar, Button, Badge, useToast, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { IconArrowAutofitContent, IconHeart, IconShare, IconStairs, IconMapPin } from '@tabler/icons-react';
import ListingSwiper from "./listing-swiper";


const ListingItem = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const saveSearch = () => {
    toast({
      title: "Ricerca salvata",
      duration: 1500,
      status: "success",
      isClosable: true,
    });
  };

  return (
    <div className="item-listing">
    <div className="row g-3">
      {/* Card img */}
      <div className="col-md-5 position-relative">
        {/* Slider START */}
        <Link href={`/listings/${data.id}`}>
          <ListingSwiper media={data?.media_photos} /></Link>
        {/* Slider END */}
      </div>
      {/* Card body */}
      <div className="col-md-7">
        <div className="card-body py-md-2 d-flex flex-column h-100 position-relative">
        <div className="d-flex justify-content-between align-items-center">
          {/* Rating and buttons */}
          <Link href={`/search?city=${data.location.parts ? data.location.parts.city : null}`} className="mb-2 f-primary">
          <span className="d-flex">
            <IconMapPin className="mr-2"/> {data.location ? data.location.parts.city : null}
          </span>
          </Link>
          <ul className="list-inline mb-0 z-index-2">
              {/* Heart icon */}
              <li className="list-inline-item">
              <Button variant="outline" size="sm"><IconHeart onClick={() => addToFavorite()}/></Button>
              </li>
              {/* Share icon */}
              <li className="list-inline-item dropdown">
              <Button variant="outline" size="sm"><IconShare /></Button>
              </li>
            </ul>
            </div>
                      {/* Title */}
                      <Heading as='h3' noOfLines={1} className="card-title d-block">
          <Link href={`/listings/${data.id}`}>{data.title}</Link>
          </Heading>
          <div className="d-flex justify-content-between align-items-center mt-2">{data.category.length > 0 ? (<Badge borderRadius='full' px='2' colorScheme='teal'>{data.category[0].title}</Badge>) : null}</div>
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
         
          <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            {/* Button */}

              <Link href={`/offices/${data.author.id}`} target="_blank" className="d-flex align-items-center">
                <div className="avatar avatar-sm">
                  <Avatar
                    size="sm"
                    src="https://via.placeholder.com/80"
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
  
  )
}

export default ListingItem;
