import React, { useState, useEffect } from "react";
import HostListings from "@/shared/hosts/host-listings";
import {
  Container,
  Row,
  Col,
  Button,
  Card
} from "reactstrap";
import { useRouter } from "next/router";
import graphQLClient from "@/lib/graphql/client";
import { GET_HOST } from "@/lib/graphql/queries/hosts";
import { getHostDetails } from "@/lib/graphql/queries/hosts";
import PupupContact from "@/shared/components/popup-contact";

const View = () => {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
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
            <div className="text-center mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xl mb-2">
                <img
                  className="avatar-img rounded-circle border border-2 border-white"
                  src="/img/placeholder.svg"
                  alt=""
                />
              </div>
              <h6 className="mb-0">{data?.fullName}</h6>
            </div>
            </Card>
          </Col>
          <Col md={9}>
            <div className="section-head">
              <h1 className="page-title">Annunci</h1>
            </div>
            <HostListings data={listings}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    </>
  )
}

export default View;



