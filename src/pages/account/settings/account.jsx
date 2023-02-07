import React from "react";
import { Container, Grid, Title, Text, Paper, Button } from '@mantine/core';
import SideNav from "@/shared/settings/side-nav";



const Settings = () => (
  <div className="page" id="searchPage">
  <Container size="xl">
    <Grid gutter="lg">
      <Grid.Col span={3}>
       <div className="medium-only"><SideNav/></div>
      </Grid.Col>
      <Grid.Col span={9}>
      <Title large>Il mio account</Title>
      <Paper radius="lg" p="lg" withBorder>
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>

      </Grid.Col>
    </Grid>
  </Container>
</div>
);

export default Settings;
