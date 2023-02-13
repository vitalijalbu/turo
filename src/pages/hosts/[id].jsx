import React, { useState, useEffect } from "react";
import Link from "next/link";
import HostListings from "@/shared/hosts/host-listings";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody
} from "reactstrap";
import {
  IconPlus,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import { getHostDetails } from "@/lib/graphql/queries/hosts";
import PupupContact from "@/shared/components/popup-contact";

const View = () => {
  
  const [loading, setLoading] = useState(false);
  const [user, setData] = useState();
  const [listings, setListings] = useState([]);
  const [popupContact, setContactPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };
  
  useEffect(() => {
    getHostDetails()
    .then((res) => {
      console.log('res', res);
      setData(res?.user);
      setListings(res?.listings);
    });
  }, []);


  return (
    <>
    {!popupContact && (<PupupContact opened={popupContact} toggle={toggleContactPopup}/>)}
    <div className="page">
    <div className="page-content">
      <Container>
        <Row>
          <Col md={3}>
            <Card shadow="sm" withBorder p="xl">
            <CardBody className="text-center mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xl mb-2">
                <img
                  className="avatar-img rounded-circle border border-2 border-white"
                  src="/img/placeholder.svg"
                  alt=""
                />
              </div>
              <h6 className="mb-0">{user?.fullName}</h6>
              <span>{`Data creazione ${user?.dateCreated}`}</span>
                      <hr/>
                      <div className="d-block">
                        <Button block color="dark" onClick={toggleContactPopup}>
                          Contatta l'inserzionista
                        </Button>
                      </div>
                        </CardBody>
            </Card>
          </Col>
          <Col md={9}>
            <div className="section-head">
              <h1 className="page-title">Annunci</h1>
            </div>
            <HostListings user={listings}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    </>
  )
}

export default View;



