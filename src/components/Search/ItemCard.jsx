import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Icon,
  f7,
  Link
} from "framework7-react";

const Item = ({ data }) => {
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
    <Card className="media-card">
      <CardHeader className="card-img">
        <Link href={"/listings/" + data.id}>
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure className="img-wrapper">
                <img
                  src="https://via.placeholder.com/1200x800"
                  title={data.title}
                  alt={data.title + " su resthotels.it"}
                />
              </figure>
            </div>
          </div>
        </Link>
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
        <Link href={"/listings/" + data.id}><span className="text-meta">{data.type}</span></Link>
        <Link href={"/listings/" + data.id}><h2 className="card-title m-0">{data.title}</h2></Link>
        <Link href={"/listings/" + data.id}>
          <span className="text-meta link">{data.location}</span>
        </Link>
        <div className="d-flex justify-content-between">
          <div className=""><Icon f7="bed_double_fill"></Icon></div>
        </div>
      </CardContent>
      <CardFooter padding={false}>
        <span className="text-price">{data.pricing}</span>
      </CardFooter>
    </Card>
  );
};

export default Item;
