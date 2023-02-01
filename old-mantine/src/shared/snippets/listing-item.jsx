import React, { useState } from "react";
import { Group, Button, Badge, Text, Title, Divider, Avatar, ActionIcon } from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import Link from "next/link";
import { IconHeart, IconShare, IconPlus } from '@tabler/icons-react';
import ListingSwiper from "./listing-swiper";
import { IconStairs } from "@tabler/icons-react";

const ListingItem = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    showNotification({
      title: "L'annuncio è stato aggiunto ai preferiti.",
      autoClose: 2500,
    });
  };

  return (
    <li>
      <div className="item-content p-0">
      <div className="listing-card_badge">
          {data.badge && <Badge>{data.badge}</Badge>}
        </div>
        <div className="item-inner gallery">

        <ListingSwiper media={data?.media_photos} />
        </div>
        <div className="item-inner item-cell">
          <div className="item-row display-flex justify-content-space-between align-items-center">
            <a href={"/listings/" + data.id}>
              <div className="item-cell">
                <h3>{data?.title}</h3>
              </div>
            </a>
            <div className="">
              <div className="item-actions">
              <ActionIcon variant="transparent"><IconHeart size={16} onClick={() => addToFavorite()}/></ActionIcon>
              <ActionIcon variant="transparent"><IconShare size={16} /></ActionIcon>
              </div>
            </div>
          </div>
          <div className="item-row">
            <div className="item-cell">
              <span className="text-meta">{data.property_type}</span>
            </div>
          </div>
          <div className="item-row">
            <div className="item-cell">
              <span className="text-price">
                {data.currency_code} {data.pricing}
              </span>
            </div>
          </div>
          <div className="item-row">
            <div className="item-cell list-item_excerpt">
              <span>{data.location}</span>
            </div>
          </div>
          <div className="item-row">
            <div className="item-cell list-item_excerpt">
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
            </div>
          </div>
          <Divider my="sm" />
          <div className="item-row display-flex justify-content-space-between align-items-center">
            <div className="item-cell">
            <Group>
        <Avatar src={data.author.photo?.url ?? null} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
          <Link href={`/hosts/${data.author.id}`}>{data.author.fullName}</Link>
          </Text>
          <Text color="dimmed" size="xs">
            {`Creato il ${data.postDate}`}
          </Text>
        </div>
      </Group>
            </div>
            <div className="item-cell text-right">
            <Link href={`/hosts/${data.author.id}`}>
              <Button
                color="yellow"
                variant="outline"
                leftIcon={<IconPlus/>}
                round
              >
                Annunci del venditore
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListingItem;
