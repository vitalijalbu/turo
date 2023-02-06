import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
} from "@mantine/core";
import ItemCard from "@/shared/snippets/listing-card";
import Head from "@/shared/account/Head";
import Entries from "@/data/entries.json";
import Link from "next/link";

const Index = () => {
  return (
    <div className="page">
      <Head
        title={"Richieste"}
      />
      <Container size="xl">
        <Grid>
          <Grid.Col md={12}>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
              <tr key={'item.id'}>
                    <td>
                    </td>
                    <td>
                      <Group spacing="sm">
                        <Avatar size={26} src="https://via.placeholder.com/80" radius={26} />
                        <Text size="sm" weight={500}>
                          {'item.name'}
                        </Text>
                      </Group>
                    </td>
                    <td>{'item.email'}</td>
                    <td>{'item.job'}</td>
                  </tr>
              </tbody>
            </Table>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
