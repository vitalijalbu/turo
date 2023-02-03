import React, { useState, useEffect } from "react";
import { Container, Title } from '@mantine/core';
import PageHead from "@/shared/common/PageHead";

const Help = () => {
  return (
    <div className="page">
       <PageHead title="Aiuto" imageUrl="https://images.unsplash.com/photo-1563393934034-21b781d905ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"/>
    <Container size="xl">
      <div className="section-title">
        <Title order={1}>Aiuto</Title>
      </div>
      </Container>
    </div>
    
  );
};

export default Help;
