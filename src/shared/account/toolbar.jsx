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
  pills
>
  <NavItem>
    <Link className="nav-link active"
       href="/account">
    
      Bacheca
    </Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" href="/account/listings">
      I miei annunci
    </Link>
  </NavItem>  
  <NavItem>
    <Link className="nav-link" href="/pricing">
      Aumenta visibilità <span className="badge bg-primary">NEW</span>
    </Link>
  </NavItem>
  <NavItem>
    <Link 
      className="nav-link" href="/account/favorites"
    >
      Preferiti
    </Link>
  </NavItem>  
  <NavItem>
    <Link 
      className="nav-link" href="/account/requests"
    >
      Richieste
    </Link>
  </NavItem> 
   <NavItem>
    <Link 
      className="nav-link" href="/accout/settings"
    >
      Impostazioni
    </Link>
  </NavItem>
</Nav>
</Row>
</Container>
</section>
  )
  };

export default Toolbar;
