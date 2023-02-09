import React from "react";
import { Container, Row, Title, Text, Paper, Button } from 'reactstrap';
import SideNav from "@/shared/settings/side-nav";



const Settings = () => (
  <div className="page" id="searchPage">
  <Container>
    <Row gutter="lg">
      <Col span={3}>
       <div className="medium-only"><SideNav/></div>
      </Col>
      <Col span={9}>
      <Title large>Il mio account</h1>
      <Paper radius="lg" p="lg" withBorder>
      <p>Paper is the most basic ui component</p>
      <p>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </p>
    </Paper>

      </Col>
    </Row>
  </Container>
</div>
);

export default Settings;
