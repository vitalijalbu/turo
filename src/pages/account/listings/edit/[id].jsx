import React, { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Grid,
  Table,
  Checkbox,
  TextInput, 
  NumberInput,
  ScrollArea,
  Group,
  Avatar,
  Button,
  Text,
} from "@mantine/core";
import Head from "@/shared/account/Head";
import Entries from "@/data/entries.json";
import Link from 'next/link';
import { useRouter } from "next/router";
import Toolbar from "@/shared/hosting/toolbar";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  
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
 <div className="page">
           <Head 
      title={`Modifica annuncio #${id}`} 
      breadcrumbs={{url: "/account/listings"}}/>
     <Toolbar/>
      <Container size="xl">
        <Grid>
          <Grid.Col md={8}>
          <form onSubmit={form.onSubmit(console.log)}>

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

                  <Button type="submit" mt="sm">
                    Annulla
                  </Button>
                  <Button type="submit" mt="sm">
                    Salva
                  </Button>
              </form>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
