import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Badge, Image } from "@chakra-ui/react";
import {
  IconArrowLeft,
  IconChartBar,
  IconChevronLeft,
} from "@tabler/icons-react";

const PageHead = (props) => {
  const router = useRouter();
  const { id } = router.query;

  // Function to check if a given URL matches the current route
  const isActive = (url) => {
    return router.pathname === url;
  };
  //console.log("props", props);
  return (
    <section className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <Button
                variant="link"
                as={Link}
                href="/account/listings"
                leftIcon={<IconChevronLeft />}
              >
                I miei annunci
              </Button>
            </div>
            <div className="d-flex justify-content-between">
              <div className="left">
                <div className="d-flex justify-content-between">
                  <div className="me-3">
                    <Image
                      borderRadius="md"
                      boxSize="120px"
                      objectFit="cover"
                      src="https://via.placeholder.com/800x533"
                    />
                  </div>

                  <div>
                    <h1 className="section-title">DEmo titolo</h1>
                    <p className="section-subtitle">Creato il</p>
                    <p className="section-subtitle">
                      Stato <Badge colorScheme="green">ONLINE</Badge>
                    </p>
                  </div>
                </div>
              </div>

              <div className="right d-flex jsutify-content-space-between">
                <Link href="#" className="me-2">
                  <Button variant="outline" leftIcon={<IconChartBar />}>
                    Promuovi
                  </Button>
                </Link>

                <Button colorScheme="green">Salva</Button>
              </div>
            </div>
          </div>
        </div>
        {/* NAVIGATION */}
        <div className="my-3">
          <div className="container">
            <div className="row">
              <ul className="nav subnav">
                <li className="nav-item">
                  <Link className="nav-link active" href={`/hosting/${id}`}>
                    Dettagli annuncio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href={`/hosting/${id}/performance`}
                  >
                    Performance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={`/hosting/${id}/promote`}>
                    Promuovi
                    <Badge
                      style={{ position: "absolute", top: "0", right: "0" }}
                      colorScheme="green"
                    >
                      NEW
                    </Badge>
                  </Link>
                </li>
                <li className="nav-item disabled">
                  <Link className="nav-link" href="#">
                    Traduzioni
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHead;
