import React, { useState } from "react";
import {
  Card,
  CardBody,
  Badge
} from "reactstrap";
import { IconStairs } from "@tabler/icons-react";
import Link from "next/link";
import ListingSwiper from "./listing-swiper";

const Item = ({ data }) => {
  return (
    <Card className="mb-3">
      <CardBody className="p-0">
        <div className="listing-card_badge">
          {data.badge && <Badge>{data.badge}</Badge>}
        </div>
        <Link href={`/listings/${data.id}`}>
          <ListingSwiper media={data?.media_photos} />
        </Link>
      </CardBody>
      <CardBody>
        <Link href={`/listings/${data.id}`}>
          <span
            mt="xs"
            variant="link"
            component="a"
            href={"/search?location=" + data.slug}
            size="sm"
          >
            {data.location?.city}
          </span>
          <h3>
            {data.title}
          </h3>
        </Link>
      
      <div>
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
      <span color="blue" mt="xs" size="md" weight={600}>
        {data.pricing ? data.pricing : "Trattativa riservata"}
      </span>
      </CardBody>
    </Card>
  );
};

export default Item;
