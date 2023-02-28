import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Toolbar = () => {
  const router = useRouter();
  const { id } = router.query;

  // Function to check if a given URL matches the current route
  const isActive = (url) => {
    return router.pathname === url;
  };
  return (
    <section className="my-3">
      <div className="container">
        <div className="row">
          <ul className="nav subnav">
          <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}`) ? 'active' : ''}`} href={`/hosting/${id}`}>
                Dettagli
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}/pricing`) ? 'active' : ''}`} href={`/hosting/${id}/pricing`}>
                Prezzi
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}/location`) ? 'active' : null}`} href={`/hosting/${id}/location`}>
                Posizione
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}/media`) ? 'active' : null}`} href={`/hosting/${id}/media`}>
                Foto e video
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}/info`) ? 'active' : null}`} href={`/hosting/${id}/info`}>
                Altre informazioni
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive(`/hosting/${id}/promote`) ? 'active' : null}`} href={`/hosting/${id}/promote`}>
                Promuovi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Toolbar;
