import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getListing } from "@/lib/graphql/queries/listings";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import PupupContact from "@/shared/components/popup-contact";
import PopupShare from "@/shared/listings/popup-share";
import Gallery from "@/shared/listings/gallery";
import {
  IconCornerRightUp,
  IconHeart,
  IconShare,
  IconPlus,
  IconStairs,
  IconMapPin,
} from "@tabler/icons-react";
import RelatedListings from "@/shared/sections/related-listings";



const Map = dynamic(() => import("@/shared/listings/map"), {
  ssr: false,
});

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [popupContact, setContactPopup] = useState(false);
  const [popupShare, setPopupShare] = useState(false);
  const [form, setFormValues] = useState({});
  const [entry, setEntry] = useState(null);
  const [related_entries, setRelatedEntries] = useState([]);


  useEffect(() => {
    getListing(id)
    .then((data) => {
      setEntry(data?.entry);
      setRelatedEntries(data?.related_listings);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };
  /* Toggle Item Popup */
  const togglePopupShare = () => {
    setPopupShare(!popupShare);
  };
  const addToFavorite = () => {
    console.log('added')
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
      <div className="page-content">
        <section className="py-0 pt-sm-5">
          <div className="container position-relative">
            {/* p and button START */}
            <div className="row mb-3">
              <div className="col-12">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link href="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href={`/search`}>Ricerca</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>{entry?.title}</BreadcrumbItem>
                </Breadcrumb>
                {/* Meta */}
                <div className="d-lg-flex justify-content-lg-between mb-1">
                  {/* p */}
                  <div className="mb-2 mb-lg-0">
                    <h1 className="fs-2">{entry?.title}</h1>
                    {/* Location */}
                    <p className="fw-bold mb-0">
                      {entry?.location?.address}
                    </p>
                    <Link
                        href="#location"
                        className="d-block"
                      >
                        <IconMapPin />
                        Vedi sulla mappa
                      </Link>
                  </div>
                  {/* Buttons */}
                  <ul className="list-inline text-end">
                    {/* Heart icon */}
                    <li className="list-inline-item">
                      <Button outline onClick={() => addToFavorite()}>
                        <IconHeart /> Salva
                      </Button>
                    </li>
                    {/* Share icon */}
                    <li className="list-inline-item dropdown">
                      <Button outline onClick={() => togglePopupShare()}>
                        <IconCornerRightUp /> Condividi
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* p and button END */}
          </div>
        </section>

        <Container>
          <section id="listing-gallery" className="mb-4">
            <Gallery />
          </section>

          <Row>
            <Col md={8}>
              <section className="section-content mb-3" id="listingSpecifications">
                <div className="section-head">
                  <h4 className="section-title">Descrizione</h4>
                </div>
                <p>{entry?.excerpt}</p>
              </section>              
              
              <section className="section-content mb-3" id="listingSpecifications">
                <div className="section-title">
                  {entry?.total_floors}
                </div>
              </section>
              <section className="section-content mb-3" id="listingSpecifications">
                <div className="section-title">
                  <h4 className="section-title">Servizi</h4>
                </div>
                <div className="bg-transparent">
                  <div className="row g-4">
                    {/* Activities */}
                    <div className="col-sm-6">
                      {/* List */}
                      <ul className="list-group-flush  mt-2 mb-0">
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
                        <i className="fa-solid fa-credit-me-2" />
                        Payment Method
                      </h6>
                      {/* List */}
                      <ul className="list-group  mt-2 mb-0">
                        <li className="list-group-item pb-0">
                          <i className="fa-solid fa-check-circle text-success me-2" />
                          Credit (Visa, Master )
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
                      <ul className="list-group  mt-2 mb-0">
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
                      <ul className="list-group  mt-2 mb-4 mb-sm-5">
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
                      <ul className="list-group  mt-2 mb-0">
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
              </section>
              <section className="section-content mb-3" id="listingMap">
                <div className="section-title">
                  <h4>Posizione</h4>
                </div>
                <Map/>
              </section>
            </Col>
            <Col md={4}>
            <div className="position-sticky" style={{ top: "2rem" }}>
              <Card>
              <CardBody className="text-center">
                   {/* Image */}
                <img
                  src={'/img/placeholder.svg'}
                  className="rounded-circle avatar-xl"
                  alt=""
                />
                <h5>
                 {entry?.author?.fullName}
                </h5>
                </CardBody>
                <CardBody>
                <div className="d-block mb-1">
                  <Button
                    block
                    color="dark"
                    onClick={toggleContactPopup}
                  >
                    Contatta l'inserzionista
                  </Button>
                </div>
                <div className="d-block">
                  <Link href={`/hosts/${entry?.id}`} passHref>
                    <Button block color="primary" outline>
                      <IconPlus/> Annunci dell'inserzionista
                    </Button>
                  </Link>
                </div>
                </CardBody>
              </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <RelatedListings entries={related_entries}/>
      </div>
    </>
  );
};

export default Page;
