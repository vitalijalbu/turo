import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Tabs,
  Text,
} from "@mantine/core";
import Head from "@/shared/components/account/Head";
import Entries from "@/data/entries.json";
import Link from 'next/link';

const Listings = () => {
  return (
 <div className="page">
           <Head 
      title={"I miei annunci"} 
      primaryAction={{
        url: '/hosting/create',
        content: 'Crea un nuovo annuncio',
      }}/>
      <Container size="xl">
      <Grid>
            <Grid.Col span={12}>
            <Tabs defaultValue="active">
      <Tabs.List>
        <Tabs.Tab value="active">Annunci attivi</Tabs.Tab>
        <Tabs.Tab value="archived">Annunci archiviati</Tabs.Tab>
      </Tabs.List>
    </Tabs>
    </Grid.Col>
    </Grid>
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
        <Group spacing="sm">
          <Avatar size={40} src="{item.avatar}" radius={40} />
          <div>
            <Link href={`listings/edit/1000`}>
            <Text size="sm" weight={500}>
              NOME
            </Text>
            <Text color="dimmed" size="xs">
              CTRETED
            </Text>
            </Link>
          </div>
        </Group>
      </td>
                    <td>
                      <Group spacing="sm">
                        <Avatar size={26} src="https://via.placeholder.com/80" radius={26} />
                        <Text size="sm" weight={500}>
                          {'item.name'}
                        </Text>
                      </Group>
                    </td>
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

export default Listings;
