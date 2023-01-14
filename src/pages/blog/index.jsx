import React, { useState, useEffect } from "react";
import PageHead from "@/shared/common/PageHead";

import { Container, Title} from '@mantine/core';

const Help = () => {
  return (
    <div className="page">
    <PageHead title="Blog"/>
    <Container size="xl">
      <div className="section-title">
        no posts yet
      </div>
      </Container>
    </div>
    
  );
};

export default Help;
