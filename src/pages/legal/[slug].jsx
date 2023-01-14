import React, { useState, useEffect } from "react";
import LegalTabs from "@/shared/Other/LegalTabs";
import {
  Container,
  Grid,
  Title,
  Tabs
} from "@mantine/core";
import { useRouter } from "next/router";

const Cookies = () => {
  const router = useRouter();

  return (
    <div className="page">
      <Container size="xl">
      <LegalTabs/>
        <Grid>
          ciao testo
        </Grid>
      </Container>
    </div>
  );
};

export default Cookies;
