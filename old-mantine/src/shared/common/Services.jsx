import React from "react";
import { Container, Grid, Card, Image, Title, Text } from "@mantine/core";
import servicesList from "@/data/services.json";


const Services = () => {
  return (
    <section className="section-content">
      <Container size="xl">
                  <div className="section-title">
        <Title order={1}>Servizi offerti</Title>
        <Text>Resthotel, oltre ad essere un portale, fronisce anche dei servizi</Text>
    </div>
      
        <Grid>
        {Array.isArray(servicesList.data) ? (
   <> 
    {servicesList.data.map((data, i) => (
       <Grid.Col span={3} key={i}>
       <Card
         shadow="sm"
         p="xl"
         component="a"
         href="/account"
         target="_blank"
       >
         <Card.Section>
           <Image
             src="https://via.placeholder.com/800x533"
             height={160}
             alt="No way!"
           />
         </Card.Section>

         <Text weight={500} size="lg" mt="md">
           {data.title}
         </Text>

         <Text mt="xs" color="dimmed" size="sm">
         {data.content}
         </Text>
       </Card>
     </Grid.Col>
    ))}
  </>
) : (
  <Text strong>Nessun dato</Text>
)}


         
        </Grid>
      </Container>
    </section>
  );
};
export default Services;
