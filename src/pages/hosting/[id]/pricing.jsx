import React from "react";

import {
  Container,
  Row,
  Title,
  Button,
  Card,
  NumberInput,
  TextInput,
} from "reactstrap";
import SideNav from "@/shared/hosting/SideNav";

const Pricing = () => {

  return (
    <div className="page" id="searchPage">
      <Container>
        <Row gutter="lg">
          <Col span={3}>
            <div className="medium-only">
              <SideNav />
            </div>
          </Col>
          <Col span={9}>
            <h1 large>Impostazioni account</h1>
            <Card withBorder>
              <form onSubmit={form.onSubmit(console.log)}>
                <Card.Section inheritPadding py="md">
                  <TextInput
                    label="Name"
                    placeholder="Name"
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    mt="sm"
                    label="Email"
                    placeholder="Email"
                    {...form.getInputProps("email")}
                  />
                  <NumberInput
                    mt="sm"
                    label="Age"
                    placeholder="Age"
                    min={0}
                    max={99}
                    {...form.getInputProps("age")}
                  />
                </Card.Section>
                <Card.Section inheritPadding py="md">
                  <Button type="submit" mt="sm">
                    Indietro
                  </Button>
                  <Button type="submit" mt="sm">
                    Salva
                  </Button>
                </Card.Section>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
