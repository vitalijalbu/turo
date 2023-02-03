import React from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Grid,
  Title,
  Button,
  Card,
  NumberInput,
  TextInput,
} from "@mantine/core";
//import HelpBox from "@/shared/hosting/HelpBox";

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
      <Container size="xl">
        <Grid gutter="lg">
          <Grid.Col span={9}>
            <Title large>Crea un nuovo annuncio</Title>
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
          </Grid.Col>
          <Grid.Col span={3}>
            <div className="medium-only">
              
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Settings;
