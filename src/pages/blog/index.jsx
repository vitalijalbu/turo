import React, { useState, useEffect } from "react";
import PageHead from "@/shared/common/PageHead";

import { Container, Title} from 'reactstrap';

const Help = () => {
  return (
    <div className="page">
    <PageHead title="Blog"/>
    <Container>
      <div className="section-title">
        no posts yet
      </div>
      </Container>
    </div>
    
  );
};

export default Help;
