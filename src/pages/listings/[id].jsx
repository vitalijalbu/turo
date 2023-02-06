import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";

import { Container, Row, Col, Card, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import PupupContact from "@/shared/components/popup-contact";
import SharePopup from "@/shared/listings/share-popup";
import Gallery from "@/shared/listings/gallery";
import { IconCornerRightUp, IconHeart, IconShare, IconPlus, IconStairs } from '@tabler/icons-react';
import graphQLClient from "@/lib/graphql/client";
import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/shared/listings/Map"), {
  ssr: false,
});



const View = () => {
  const router = useRouter();
  const {id}  = router.query;
  const [loading, setLoading] = useState(false);
  const [popupContact, setContactPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});
  const [data, setData] = useState({});


  async function getData() {
    const VIEW_QUERY = `query{
      entry(id:"${id}") {
        id
        title
        postDate @formatDateTime (format: "Y-m-d")
        author{
          fullName
          username
        }
        ... on listings_default_Entry {
          excerpt
        }
      }
    }
  `;
    try {
      const response = await graphQLClient.request(VIEW_QUERY);
      if (response) {
        setData(response?.entry);
      }
    } catch (err) {
      console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);




  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };
  /* Toggle Item Popup */
  const toggleSharePopup = () => {
    setSharePopup(!popupShare);
  };

  return (
    <>
      {popupShare && (
        <SharePopup opened={popupShare} toggle={toggleSharePopup} />
      )}
      {popupContact && (
        <PupupContact opened={popupContact} toggle={toggleContactPopup} />
      )}
      <div className="page">
      <section className="py-0 pt-sm-5">
  <div className="container position-relative">
    {/* p and button START */}
    <div className="row mb-3">
      <div className="col-12">
      <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Library
              </BreadcrumbItem>
            </Breadcrumb>
        {/* Meta */}
        <div className="d-lg-flex justify-content-lg-between mb-1">
          {/* p */}
          <div className="mb-2 mb-lg-0">
            <h1 className="fs-2">{data.title}</h1>
            {/* Location */}
            <p className="fw-bold mb-0">
              <i className="bi bi-geo-alt me-2" />
              {data.id}
              <a
                href="#location"
                className="ms-2 text-decoration-underline"
              >
                <i className="bi bi-eye-fill me-1" />
                Vedi sulla mappa
              </a>
            </p>
          </div>
          {/* Buttons */}
          <ul className="list-inline text-end">
             {/* Heart icon */}
             <li className="list-inline-item">
              <Button outline onClick={() => addToFavorite()}><IconHeart/> Salva</Button>
              </li>
              {/* Share icon */}
              <li className="list-inline-item dropdown">
              <Button outline onClick={() => toggleSharePopup()}><IconCornerRightUp /> Condividi</Button>
              </li>
          </ul>
        </div>
      </div>
    </div>
    {/* p and button END */}
    {/* Alert box START */}
    <div
      className="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show mb-4 rounded-3 pe-2"
      role="alert"
    >
      <div className="d-flex">
        <span className="alert-heading h5 mb-0 me-2">
          <i className="bi bi-exclamation-octagon-fill" />
        </span>
        <span>
          <strong className="alert-heading me-2">Covid Policy:</strong>You may
          require to present an RT-PCR negative test report at the hotel
        </span>
      </div>
      <button
        type="button"
        className="btn btn-link text-primary-hover pb-0 text-end"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <i className="bi bi-x-lg" />
      </button>
    </div>
    {/* Alert box END */}
  </div>
</section>

        <Container>
          <section id="listingGallery">
            <Gallery />
          </section>

          <Row>
            <Col md={8}>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <p order={3}>Descrizione</p>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </section>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <p order={3}>Servizi</p>
                </div>
                <div position="apart">
                  <div className="item-service_block">
                    <span className="title">Locali</span>
                    <span className="content">demo</span>
                  </div>

                  <div className="item-service_block">
                    <span className="title">Piani</span>
                    <span className="content">demo</span>
                  </div>
                  <div className="item-service_block">
                    <span className="title">Stato</span>
                    <span className="content">Ristrutturato</span>
                  </div>
                </div>

              </section>
              <section className="section-content" id="listingMap">
                <div className="section-title">
                  <p order={3}>Posizione</p>
                </div>
                mappa
              </section>
            </Col>
            <Col md={4}>
              <Card>
                <img
                  src="https://via.placeholder.com/80"
                  size={120}
                  radius={120}
                  mx="auto"
                />
                <p align="center" size="lg" weight={500} mt="md">
                  Esempio
                </p>
                <p align="center" color="dimmed" size="sm">
                  {"Annunci online 2"}
                </p>
                <p align="center" color="dimmed" size="sm">
                  {"Annunci online 2"}
                </p>
                <div className="d-block mb-1">
                  <Button
                    block
                    color="dark"
                    radius="xl"
                    onClick={toggleContactPopup}
                  >
                    Contatta Agenzia
                  </Button>
                  </div>
                  <div className="d-block">
                  <Link href="/hosts/1231" passHref>
                    <Button block component="a" variant="default">
                      Annunci del venditore
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default View;
