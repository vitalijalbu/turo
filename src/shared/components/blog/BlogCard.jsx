import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "framework7-react";
import ItemSwiper from "./ItemSwiper";

const BlogCard = ({ props }) => {

  return (
      <Card noShadow className="">
      <a href={'/listings/'+props.id}>
        <CardHeader>
       <ItemSwiper/>
       </CardHeader>
        <CardContent>
          <h2 className="item-card_title m-0">{props.title}</h2>
        </CardContent>
        <CardFooter>
          <p className="text-price">
            {props.excerpt}
          </p>
        </CardFooter>
      </a>
      </Card>
  );
};

export default BlogCard;
