import React, { useState } from "react";
import { Group, Button, Badge, Text, Title, Divider, Avatar, ActionIcon } from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import Link from "next/link";
import { IconHeart, IconShare, IconPlus } from '@tabler/icons';

const ItemList = ({ data }) => {
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
        {data.badge && (
          <Chip color="primary" text={data.badge} className="item-ribbon" />
        )}
        {/**/}
        <div className="item-inner gallery">
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="https://via.placeholder.com/1200x800"/>
            </figure>
          </div>
        </div>
        </div>
        <div className="item-inner item-cell">
          <div className="item-row display-flex justify-content-space-between align-items-center">
            <a href={"/listings/" + data.id}>
              <div className="item-cell">
                <h3>{data.title}</h3>
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
              <span className="text-meta">{data.type}</span>
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
            </div>
          </div>
          <Divider my="sm" />
          <div className="item-row display-flex justify-content-space-between align-items-center">
            <div className="item-cell">
            <Group>
        <Avatar src="https://via.placeholder.com/80" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            Demo agenzia
          </Text>

          <Text color="dimmed" size="xs">
            aggiunto
          </Text>
        </div>
      </Group>
            </div>
            <div className="item-cell text-right">
              
              <Link href="/hosts/100"><Button
                color="blue"
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

export default ItemList;
