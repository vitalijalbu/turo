import React, { useState, useRef } from "react";
import {
  BlockTitle,
  CardContent,
  Card,
  Row,
  Col,
  List,
  ListItem,
  Link
} from "framework7-react";
import featuresList from "@/data/features.json";


const Features = () => {


  return (
    <section className="padding-vertical-xl" id="features">

      <div className="container">
        <div className="grid">
        {featuresList.map((data, i) => (
          <div className="col-md-4 col-xs-6" id={i}>
            <div className="feature-media">
              <img src={data.image_url} />
            </div>
            <div className="feature-inner">
              <div className="feature-title-row">
                <div className="feature-title"><h3>{data.title}</h3></div>
              </div>
              <div className="feature-subtitle"><p>{data.excerpt}</p></div>
            </div>
          </div>
      ))}  
    </div>
      </div>
    </section>
  );
};

export default Features;
