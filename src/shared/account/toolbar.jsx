import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


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
      Aumenta visibilità <span className="badge bg-primary">NEW</span>
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
      className="nav-link" href="/account/requests"
    >
      Richieste
    </Link>
  </li> 
  <li className="nav-item">
    <Link 
      className="nav-link" href="/accout/settings"
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
