import React, { useState } from "react";
import {
  Text,
  Row,
  Card,
  Image,
  CardContent,
  CardFooter,
  Group,
  Badge,
} from "@mantine/core";
import { IconStairs } from "@tabler/icons-react";
import Link from "next/link";
import ListingSwiper from "./listing-swiper";

const Item = ({ data }) => {
  return (
    <Card withBorder p="xl">
      <Card.Section>
        <div className="listing-card_badge">
          {data.badge && <Badge>{data.badge}</Badge>}
        </div>
        <Link href={`/listings/${data.id}`}>
          <ListingSwiper media={data?.media_photos} />
        </Link>
      </Card.Section>
      <Card.Section>
        <Link href={`/listings/${data.id}`}>
          <Text
            mt="xs"
            variant="link"
            component="a"
            href={"/search?location=" + data.slug}
            size="sm"
          >
            {data.location}
          </Text>
          <Text weight={500} size="lg" mt="md">
            {data.title}
          </Text>
        </Link>
      </Card.Section>
      <Group>
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
      </Group>
      <Text color="blue" mt="xs" size="md" weight={600}>
        {data.pricing ? data.pricing : "Trattativa riservata"}
      </Text>
    </Card>
  );
};

export default Item;
