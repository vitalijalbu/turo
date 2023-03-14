import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container } from "@chakra-ui/react";
import { IconArrowLeft, IconPlus } from '@tabler/icons-react';;
import Toolbar from "./toolbar";

const PageHead = (props) => {
  //console.log("props", props);
  return (
<section className="page-heading">
  <div className="container">
  
     <div className="row">

            <div className="d-flex">
                <div className="flex-grow-1">
                <h1 className="section-title">{props.title}</h1>
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
                {props.secondaryAction && (
                  <Button color="default">
                    {props.secondaryAction.content}
                  </Button>
                )}
              </div>
              </div>

    </div>
    <Toolbar/>
    </div>
</section>

  );
};

export default PageHead;
