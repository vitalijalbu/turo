import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  Badge
} from "reactstrap";
import { IconStairs, IconMapPin } from "@tabler/icons-react";
import ListingSwiper from "./listing-swiper";

const Item = ({ data }) => {
  return (
    <Card className="mb-3 listing-card">
      <CardBody className="p-0">
        <div className="listing-card_badge">
          <Badge>{data?.badge}</Badge>
        </div>
        <Link href={`/listings/${data?.id}`}>
          <ListingSwiper media={data?.media_photos} />
        </Link>
      </CardBody>
      <CardBody>
        <Link href={`/search?city=${data?.location?.parts?.city}`}>
          <span
            mt="xs"
            variant="link"
            component="a"
            href={"/search?location=" + data?.slug}
            size="sm"
          >
            <IconMapPin/> {data.location ? data.location.parts.city : null}
          </span>
          </Link>
          <h5 className="card-title">
          <Link href={`/listings/${data?.id}`}>
            {data?.title}
            </Link>
          </h5>
        
      
      <div>
        {data?.total_floors ?? (
          <div className="listing-card_data">
            <span>
              <IconStairs />
            </span>
            <span>{data?.total_floors}</span>
          </div>
        )}
        {data?.property_status ?? (
          <div className="listing-card_data">
            <span>{data?.property_status}</span>
          </div>
        )}
      </div>
      <span className="color-link">
        {data?.pricing ?? "Trattativa riservata"}
      </span>
      </CardBody>
    </Card>
  );
};

export default Item;
