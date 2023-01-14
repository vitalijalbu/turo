import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Group, Text, Title} from "@mantine/core";

const Head = (props) => {
    console.log('props', props)
  return (
    <section className="page-heading">
    <Container size="xl">
    <div className="section-title">
    <Group position="apart">
  <Title order={1}>{props.title}</Title>
  {props.primaryAction && <Button>{props.primaryAction.content}</Button>}
  </Group>
</div>

</Container>
</section>
  );
};

export default Head;
