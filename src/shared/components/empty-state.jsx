import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button,  Row, Col } from "reactstrap";
import { IconArrowLeft, IconPlus } from '@tabler/icons-react';;

const EmptyState = (props) => {
  //console.log("props", props);
  return (
<section className="section-content text-center">
  <div className="container">
  
     <Row>
     <Col md={12}>
            <div className="d-block">
                <div className="flex-grow-1">
                <h3 className="page-title">{props.title}</h3>
                {props.subtitle && (
                  <p>
                    {props.subtitle}
                  </p>
                )}
              </div>
              <div>
                {props.primaryAction && (
                  <Link href={props.primaryAction.url}>
                    <Button color="primary">
                    <IconPlus/> {props.primaryAction.content}
                  </Button>
                  </Link>
                )}
              </div>
              </div>
        </Col>
    </Row>
    </div>
</section>

  );
};

export default EmptyState;
