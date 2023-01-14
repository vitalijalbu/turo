import React, { useState } from "react";
import { Group, Button, Badge, Text, Title } from "@mantine/core";
import ItemSwiper from "./ItemSwiper";
import Link from "next/link";

const ItemList = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = (e) => {
    e.preventDefault();
    f7.toast.show({
      text: "L'annuncio è stato aggiunto ai preferiti.",
      horizontalPosition: "center",
      closeTimeout: 2500,
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
          <ItemSwiper />
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
                <Button
                  raised
                  small
                  iconF7="heart"
                  className="rounded"
                  onClick={addToFavorite}
                ></Button>
                <Button
                  raised
                  small
                  iconF7="square_arrow_up"
                  className="rounded"
                  onClick={addToFavorite}
                ></Button>
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
                <div className="item-card_data">
                  <span>icon</span>
                  <span>demo</span>
                </div>
                <div className="item-card_data">
                  <span>icon</span>
                  <span>demo</span>
                </div>
                <div className="item-card_data">
                  <span>icon</span>
                  <span>demo</span>
                </div>
              </Group>
            </div>
          </div>
          <div className="item-row display-flex justify-content-space-between align-items-center">
            <div className="item-cell">
              <div className="hosting-footer">
                <div className="item-avatar">
                  <img
                    src="https://via.placeholder.com/80x80"
                    width="34"
                    height="34"
                    className=""
                  />
                </div>
                <div className="item-name">Host demo</div>
              </div>
            </div>
            <div className="item-cell text-right">
              <Button
                color="blue"
                iconF7="plus"
                href="/hosts/1000"
                target="_blank"
                round
              >
                Annunci del venditore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ItemList;
