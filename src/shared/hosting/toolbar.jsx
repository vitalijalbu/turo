import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Nav, NavItem  } from "reactstrap";

const Toolbar = () => {
  const router = useRouter();
  const { id } = router.query;

  return(
    <section className="my-3">
    <Container>
    <Row>
<Nav
  tabs
>
  <NavItem>
    <Link className="nav-link"
      active
       href={`/hosting/${id}`}>
    
      Dettagli
    </Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" href={`/hosting/${id}/pricing`}>
      Prezzi
    </Link>
  </NavItem>
  <NavItem>
    <Link 
      className="nav-link" href={`/hosting/${id}/location`}
    >
      Posizione
    </Link>
  </NavItem>  
  <NavItem>
    <Link 
      className="nav-link" href={`/hosting/${id}/photos`}
    >
      Foto e video
    </Link>
  </NavItem> 
   <NavItem>
    <Link 
      className="nav-link" href={`/hosting/${id}/info`}
    >
      Altre informazioni
    </Link>
  </NavItem>
</Nav>
</Row>
</Container>
</section>
  )
  };

export default Toolbar;
