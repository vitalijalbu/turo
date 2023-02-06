import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";

import { Container, Row, Col, Card, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import PupupContact from "@/shared/components/popup-contact";
import PopupShare from "@/shared/listings/popup-share";
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
  const [popupShare, setPopupShare] = useState(false);
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
  const togglePopupShare = () => {
    setPopupShare(!popupShare);
  };

  return (
    <>
      {popupShare && (
        <PopupShare opened={popupShare} toggle={togglePopupShare} />
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
              <Button outline onClick={() => togglePopupShare()}><IconCornerRightUp /> Condividi</Button>
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


              </section>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <p order={3}>Servizi</p>
                </div>
                <div className="card bg-transparent">
  {/* Card header */}
  <div className="card-header border-bottom bg-transparent px-0 pt-0">
    <h3 className="card-title mb-0">Amenities</h3>
  </div>
  {/* Card body START */}
  <div className="card-body pt-4 p-0">
    <div className="row g-4">
      {/* Activities */}
      <div className="col-sm-6">
        <h6>
          <i className="fa-solid fa-biking me-2" />
          Activities
        </h6>
        {/* List */}
        <ul className="list-group list-group-borderless mt-2 mb-0">
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Swimming pool
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Spa
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Kids' play area
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Gym
          </li>
        </ul>
      </div>
      {/* Payment Method */}
      <div className="col-sm-6">
        <h6>
          <i className="fa-solid fa-credit-card me-2" />
          Payment Method
        </h6>
        {/* List */}
        <ul className="list-group list-group-borderless mt-2 mb-0">
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Credit card (Visa, Master card)
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Cash
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Debit Card
          </li>
        </ul>
      </div>
      {/* Services */}
      <div className="col-sm-6">
        <h6>
          <i className="fa-solid fa-concierge-bell me-2" />
          Services
        </h6>
        {/* List */}
        <ul className="list-group list-group-borderless mt-2 mb-0">
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Dry cleaning
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Room Service
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Special service
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Waiting Area
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Secrete smoking area
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Concierge
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Laundry facilities
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Ironing Service
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Lift
          </li>
        </ul>
      </div>
      {/* Safety & Security */}
      <div className="col-sm-6">
        <h6>
          <i className="bi bi-shield-fill-check me-2" />
          Safety &amp; Security
        </h6>
        {/* List */}
        <ul className="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Doctor on Call
          </li>
        </ul>
        <h6>
          <i className="fa-solid fa-volume-up me-2" />
          Staff Language
        </h6>
        {/* List */}
        <ul className="list-group list-group-borderless mt-2 mb-0">
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            English
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Spanish
          </li>
          <li className="list-group-item pb-0">
            <i className="fa-solid fa-check-circle text-success me-2" />
            Hindi
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Card body END */}
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
