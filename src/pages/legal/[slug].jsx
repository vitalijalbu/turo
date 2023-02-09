import React, { useState, useEffect } from "react";
import LegalTabs from "@/shared/Other/LegalTabs";
import {
  Container,
  Row,
  Title,
  Tabs
} from "reactstrap";
import { useRouter } from "next/router";

const Cookies = () => {
  const router = useRouter();

  return (
    <div className="page">
      <Container>
      <LegalTabs/>
        <Row>
          ciao testo
        </Row>
      </Container>
    </div>
  );
};

export default Cookies;
