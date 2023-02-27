import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Badge } from "@chakra-ui/react";

const Toolbar = () => {
  const router = useRouter();
  const { id } = router.query;

  return(
    <section className="my-3">
    <div className="container">
    <div className="row">
<ul className="nav">
 <li className="nav-item">
    <Link className="nav-link active"
       href="/account">
    
      Bacheca
    </Link>
  </li>
 <li className="nav-item">
    <Link className="nav-link" href="/account/listings">
      I miei annunci
    </Link>
  </li>  
 <li className="nav-item">
    <Link className="nav-link" href="/pricing">
      Aumenta visibilità <Badge style={{position: 'absolute', top: '0', right: '0'}} colorScheme='green'>NEW</Badge>
    </Link>
  </li>
 <li className="nav-item">
    <Link 
      className="nav-link" href="/account/requests"
    >
      Richieste
    </Link>
  </li> 
  <li className="nav-item">
    <Link 
      className="nav-link" href="/account/favorites"
    >
      Preferiti
    </Link>
  </li>  
  <li className="nav-item">
    <Link 
      className="nav-link" href="/account/settings"
    >
      Impostazioni
    </Link>
  </li>
</ul>
</div>
</div>
</section>
  )
  };

export default Toolbar;
