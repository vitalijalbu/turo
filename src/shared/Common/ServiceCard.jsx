import React, { useState } from "react";
import Link from "framework7-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "framework7-react";

const Item = ({ data }) => {

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
      </CardHeader>
      <CardContent padding>
        <Link href={"/listings/" + data.id}><span className="text-meta">{data.type}</span></Link>
        <Link href={"/listings/" + data.id}><h2 className="card-title m-0">{data.title}</h2></Link>
        <Link href={"/listings/" + data.id}>
          <span className="text-meta link">{data.location}</span>
        </Link>
      </CardContent>
      <CardFooter padding={false}>
        <span className="text-price">{data.pricing}</span>
      </CardFooter>
    </Card>
  );
};

export default Item;
