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
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };
  /* Toggle Item Popup */
  const togglePopupShare = () => {
    setPopupShare(!popupShare);
  };
  const addToFavorite = () => {
    console.log("added");
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
        <div className="page-content pt-0">
          <section className="py-0 pt-sm-5 bg-light">
            <Container>
              {/* p and button START */}
              <Row>
                <Col>
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
                  <div className="d-lg-flex justify-content-lg-between mb-3">
                    {/* p */}
                    <div className="mb-2 mb-lg-0">
                      <h1 className="fs-2">{entry?.title}</h1>
                      {/* Location */}
                      <p className="fw-bold mb-0">{entry?.location?.address}</p>
                      <Link href="#location" className="text-primary d-block">
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
                </Col>
              </Row>
              <Row>
            <div id="listing-gallery" className="mb-4">
              <Gallery />
            </div>
            </Row>
            </Container>
            </section>
            <section className="mt-3">
            <Container>
            <Row>
              <Col md={7} className="gap-5">
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-head">
                    <h4 className="section-title">Descrizione</h4>
                  </div>
                  <p className="text-muted">{entry?.body}</p>
                </section>
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-title">
                    <h4 className="section-title">Servizi</h4>
                  </div>
                  <div className="bg-transparent">
                    <ul className="list-group list-group-flush">
                    {entry?.amenities.map((amenity, i) => (
                      <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="value">{amenity}</span>
                    </li>
                    ))}
                      
                    </ul>
                  </div>
                </section>                
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-title">
                    <h4 className="section-title">Prezzi</h4>
                  </div>
                  <div className="bg-transparent">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Prezzo</span>
                        <span className="value">{entry?.pricing}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Richiesta esclusa attività</span>
                        <span className="value">
                          {entry?.prezzoEsclusaAttivita}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Richiesta inclusa attività</span>
                        <span className="value">
                          {entry?.prezzoInclusaAttivita}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Conttratto</span>
                        <span className="value badge">{entry?.typeSale}</span>
                      </li>
  
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Attualmente in locazione</span>
                        <span className="value badge">{entry?.durataContrattoGestione}</span>
                      </li>  
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Scadenza contratto di gestione</span>
                        <span className="value badge">{entry?.scadenzaContrattoDiGetsione}</span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Fatturato anno precedente</span>
                        <span className="value badge">{entry?.annualRevenue}</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-title">
                    <h4 className="section-title">Caratteristiche</h4>
                  </div>
                  <div className="bg-transparent">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Affacci</span>
                        <span className="value">{entry?.views}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Piani totali</span>
                        <span className="value">{entry?.total_floors}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Anno costruzione</span>
                        <span className="value">{entry?.total_floors}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Anno di riqualificazione</span>
                        <span className="value">
                          {entry?.yearRedevelopment}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Piani totali</span>
                        <span className="value">{entry?.total_floors}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Numero fabbricati</span>
                        <span className="value">{entry?.numeroFabbricati}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Superficie Fabbricati</span>
                        <span className="value">
                          {entry?.superficieFabbricati}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Riscaldamento</span>
                        <span className="value">
                          {entry?.heating}
                        </span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Tipo di riscaldamento</span>
                        <span className="value">
                          {entry?.heatingType}
                        </span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Tipo di riscaldamento</span>
                        <span className="value">
                          {entry?.heatingSystem}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Fonte energetica</span>
                        <span className="value">
                          {entry?.energySource}
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-title">
                    <h4 className="section-title">Altre informazioni</h4>
                  </div>
                  <div className="bg-transparent">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Stelle assegnate</span>
                        <span className="value">{entry?.listingRatings}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Vani/Locali</span>
                        <span className="value">{entry?.totaleVani}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Anno costruzione</span>
                        <span className="value">{entry?.total_floors}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Camere</span>
                        <span className="value">
                          {entry?.totalRooms}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Totale balconi</span>
                        <span className="value">{entry?.totaleBalconi}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Totale terrazzi</span>
                        <span className="value">{entry?.totaleTerrazzi}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Parcheggio</span>
                        <span className="value">
                          {entry?.parking}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Posti auto</span>
                        <span className="value">
                          {entry?.postiParcheggio}
                        </span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Parcheggio coperto</span>
                        <span className="value">
                          {entry?.parcheggioCoperto}
                        </span>
                      </li>  
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Parcheggio scoperto</span>
                        <span className="value">
                          {entry?.parcheggioScoperto}
                        </span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Hotel ha ristorante?</span>
                        <span className="value">
                          {entry?.parcheggioScoperto}
                        </span>
                      </li> 
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>N° sale da pranzo</span>
                        <span className="value">
                          {entry?.parcheggioScoperto}
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  className="section-content border-bottom mb-5"
                  id="listingSpecifications"
                >
                  <div className="section-title">
                    <h4 className="section-title">Efficienza energetica</h4>
                  </div>
                  <div className="bg-transparent">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Classe energetica</span>
                        <span className="value">{entry?.energyRating}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>IPE/EPgl,nren:</span>
                        <span className="value">{entry?.ipeEpglNren}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Classe catastale</span>
                        <span className="value">{entry?.total_floors}</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  className="section-content border-bottom mb-5"
                  id="listingMap"
                >
                  <div className="section-title">
                    <h4>Posizione</h4>
                  </div>
                  mappa
                </section>
              </Col>
              <Col md={5}>
                <div className="position-sticky" style={{ top: "4.5rem" }}>
                  <Card>
                    <CardBody className="text-center">
                      {/* Image */}
                      <img
                        src={"/img/placeholder.svg"}
                        className="rounded-circle avatar-xl"
                        alt=""
                      />
                      <h5>{entry?.author?.fullName}</h5>
                      <span>{`Data creazione ${entry?.postDate}`}</span>
                      <hr/>
                      <div className="d-block mb-2">
                        <Button block color="dark" onClick={toggleContactPopup}>
                          Contatta l'inserzionista
                        </Button>
                      </div>
                      <div className="d-block">
                        <Link href={`/hosts/${entry?.id}`} passHref>
                          <Button block color="primary" outline>
                            <IconPlus /> Annunci dell'inserzionista
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          </section>
        </div>
        <RelatedListings entries={related_entries} />
      </div>
    </>
  );
};

export default Page;
