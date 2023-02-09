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

const Settings = () => {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

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
            <Title large>Impostazioni account</h1>
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

export default Settings;
