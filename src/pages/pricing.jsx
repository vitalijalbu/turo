import React from "react";
import {
  Container,
  Grid,
  Avatar,
  Title,
  Text,
  Button,
  Card,
  List,
  ThemeIcon,
} from "@mantine/core";
import pricingList from "@/data/pricing-plans.json";


const Pricing = () => (
  <div className="page">
          <section className="hero-wrapper dark overlay" style={{borderRadius: '12px'}}>
        {/* - img*/}
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3272&q=80"
                title="titolo immagine"
                alt="descrizione immagine"
              />
            </div>
          </div>
        </div>
        {/* - texts*/}
        <Container size="xl">
          <div className="row">
            <div className="col-12">
              <div className="hero-text-wrapper bg-dark">
                <Title>
                Piani e prezzi
                </Title>
                <Text>Cerca i migliori annunci</Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

    <Container size="lg">
      <div className="section-title">
        <Title order={1}>Le nostre migliori offerte</Title>
      </div>
      <Grid>
        {pricingList.data.map((data, i) => (
          <Grid.Col md={4} xs={12} lg={4}>
            <Card
              shadow="sm"
              p="xl"
              component="a"
            >
              <Card.Section p="lg" className="text-center">
                  <Title order={1}>{data.title}</Title>
              </Card.Section>
              <Card.Section p="lg">
              <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="gray" size={24} radius="xl">
          ico
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>
        Submit a pull request once you are done
      </List.Item>
    </List>
              </Card.Section>
              <Card.Section p="lg">
                <Button variant="outline" radius="xl" fullWidth size="lg">Inizia qui</Button>
              </Card.Section>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  </div>
);

export default Pricing;
