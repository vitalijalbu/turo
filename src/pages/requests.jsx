import React, { useState, useEffect } from "react";


import { 
  Container,
  Button,   
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Group,
  ActionIcon } from '@mantine/core';

const Contacts = () => {
  return (
    
   <div className="page">
    <Container>
         <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title>Contact us</Title>
          <Text mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
        </div>
        <div>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
           
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
          />

          <Group position="right" mt="md">
            <Button>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
      </Container>
    </div>
    
  );
};

export default Contacts;
