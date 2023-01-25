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
import { IconStairs } from '@tabler/icons-react';

const Item = ({ data }) => {
  return (
    <Card
      withBorder
      p="xl"
      component="a"
      href={`/listings/${data.id}`}
    >
      <Card.Section>
        <Image
          src="https://via.placeholder.com/800x533"
          height={160}
          alt="No way!"
        />
      </Card.Section>
      <Card.Section>
      <Group>
        <div className="listing-card_data">
          {data.badge && (<Badge>{data.badge}</Badge>)}
      </div> 
      </Group> 
      <Text mt="xs" variant="link" component="a" href={'/search?location='+data.slug} size="sm">
        {data.location}
      </Text>
      <Text weight={500} size="lg" mt="md">
        {data.title}
      </Text>
      </Card.Section>
      <Group>
        <div className="listing-card_data">
          <span><IconStairs/></span>
          <span>{data.totalFloors}</span>
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
      <Text color="blue" mt="xs" size="md" weight={600}>
        {data.author?.fullName}
      </Text>
    </Card>
  );
};

export default Item;
