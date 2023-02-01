import React, { useState } from "react";
import {
  Card,
  Badge,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Icon,
  f7,
  Link
} from "framework7-react";
import { IconStairs } from "@tabler/icons-react";

import ListingSwiper from "./listing-swiper";

const ListingCard = ({ data }) => {
 

  const addToFavorite = (e) => {
    e.preventDefault();
    f7.toast.show({
      text: "L'annuncio è stato aggiunto ai preferiti.",
      horizontalPosition: "center",
      closeTimeout: 2500,
    })
  }
  
  return (
    <Card className="media-card">
    <CardHeader className="card-img">
          <ListingSwiper media={data?.media_photos} />
      <div className="card-actions favorite">
        <Button
          raised
          small
          iconF7="heart"
          className="rounded"
          onClick={addToFavorite}
        ></Button>
      </div>
    </CardHeader>
    <CardContent padding>
    {data.badge && <Badge>{data.badge}</Badge>}
    </CardContent>
     <CardContent padding>
      <Link href={"/listings/" + data.id}><span className="text-meta">{data.type}</span></Link>
      <Link href={"/listings/" + data.id}><h2 className="card-title m-0">{data.title}</h2></Link>
      <Link href={"/listings/" + data.id}>
        <span className="text-meta link">{data.location}</span>
      </Link>
      <div className="d-flex justify-content-between">
      {data.total_floors ?? (
          <div className="listing-card_data">
            <span>
              <IconStairs />
            </span>
            <span>{data.total_floors}</span>
          </div>
        )}
        {data.property_status ?? (
          <div className="listing-card_data">
            <span>{data.property_status}</span>
          </div>
        )}
      </div>
    </CardContent>
    <CardFooter padding={false}>
      <span className="text-price"> {data.pricing ? data.pricing : "Trattativa riservata"}</span>
    </CardFooter>
  </Card>
  )
}

export default ListingCard;
