import React, { useState } from "react";
import {
  Text,
  Row,
  Card,
  Image,
  CardContent,
  CardFooter,
  Group,
} from "@mantine/core";
import ItemSwiper from "./ItemSwiper";

const Item = ({ data }) => {
  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href={"/listings/12312321"}
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://via.placeholder.com/800x533"
          height={160}
          alt="No way!"
        />
      </Card.Section>
      <Text mt="xs" variant="link" component="a" href={'/search?location='+data.slug} size="sm">
        {data.location}
      </Text>
      <Text weight={500} size="lg" mt="md">
        {data.title}
      </Text>

      <Group>
        <div className="listing-card_data">
          <span>icon</span>
          <span>demo</span>
        </div>
        <div className="listing-card_data">
          <span>icon</span>
          <span>demo</span>
        </div>
        <div className="listing-card_data">
          <span>icon</span>
          <span>demo</span>
        </div>
      </Group>
      <Text color="blue" mt="xs" size="md" weight={600}>
        {data.pricing}
      </Text>
    </Card>
  );
};

export default Item;
