import React, { useState, useEffect } from "react";
import { Button, Container, Anchor, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons";

const Head = (props) => {
  console.log("props", props);
  return (
    <section className="page-heading">
      <Container size="xl">
        {props.breadcrumbs && (
          <Anchor>
            <Link href={props.breadcrumbs.url}>
              <IconArrowLeft /> Torna indietro
            </Link>
          </Anchor>
        )}
        <div className="section-title">
          <Group position="apart">
            <Title order={1}>{props.title}</Title>
            {props.primaryAction && (
              <Button>{props.primaryAction.content}</Button>
            )}
          </Group>
        </div>
      </Container>
    </section>
  );
};

export default Head;
