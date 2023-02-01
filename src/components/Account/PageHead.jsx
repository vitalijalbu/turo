import React, { useState } from "react";
import { Badge, Button, Row, Col } from "framework7-react";
import Link from 'framework7-react';

const PageHead = (props) => {
  return (
    <section className="page-heading">
     <div className="container">
        <div className="grid">
            <div className="display-flex justify-content-space-between align-items-center">
                <h1 className="page-title">{props.title}</h1>
                {props.subtitle && (
                  <p>
                    {props.subtitle}
                  </p>
                )}
              </div>
              <div colspan={12} className="text-right">
                {props.primaryAction && (
                  <Button appearance="primary">
                    {props.primaryAction.content}
                  </Button>
                )}
                {props.secondaryAction && (
                  <Button appearance="default">
                    {props.secondaryAction.content}
                  </Button>
                )}
              </div>
            </div>
        </div>
    </section>
  );
};

export default PageHead;