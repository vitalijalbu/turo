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
            <IconMapPin/> {data?.location?.parts?.city}
          </span>
          </Link>
          <Link href={`/listings/${data?.id}`}>
          <h3>
            {data?.title}
          </h3>
        </Link>
      
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
      <span className="text-blue">
        {data?.pricing ?? "Trattativa riservata"}
      </span>
      </CardBody>
    </Card>
  );
};

export default Item;
