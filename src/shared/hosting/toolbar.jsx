import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container
} from "@chakra-ui/react";

const Toolbar = () => {
  const router = useRouter();
  const { id } = router.query;

  return(
    <section className="my-3">
    <div className="container">
    <Row>
<ul className="nav">
  <li className="nav-item">
    <Link className="nav-link"
      active
       href={`/hosting/${id}`}>
    
      Dettagli
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href={`/hosting/${id}/pricing`}>
      Prezzi
    </Link>
  </li>
  <li className="nav-item">
    <Link 
      className="nav-link" href={`/hosting/${id}/location`}
    >
      Posizione
    </Link>
  </li>  
  <li className="nav-item">
    <Link 
      className="nav-link" href={`/hosting/${id}/photos`}
    >
      Foto e video
    </Link>
  </li> 
   <li className="nav-item">
    <Link 
      className="nav-link" href={`/hosting/${id}/info`}
    >
      Altre informazioni
    </Link>
  </li>   
  <li className="nav-item">
    <Link 
      className="nav-link" href={`/hosting/${id}/promote`}
    >
      Promuovi
    </Link>
  </li>
</ul>
</Row>
</div>
</section>
  )
  };

export default Toolbar;