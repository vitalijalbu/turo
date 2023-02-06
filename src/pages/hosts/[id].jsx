import React, { useState, useEffect } from "react";
import HostListings from "@/shared/hosts/host-listings";
import {
  Container,
  Row,
  Title,
  Avatar,
  p,
  Button,
  Card,
} from "reactstrap";
import { useRouter } from "next/router";
import graphQLClient from "@/lib/graphql/client";
import { GET_HOST } from "@/lib/graphql/queries/hosts";
import { getHostDetails } from "@/lib/graphql/queries/hosts";
import PupupContact from "@/shared/components/popup-contact";

const View = async () => {
  
  const [loading, setLoading] = useState(false);
  const [popupContact, setContactPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(true);
  };
  
  useEffect(() => {
    getHostDetails()
    .then((res){
      console.log('res', res);
    });
  }, [])

  return (
    <>
    {!popupContact && (<PupupContact/>)}
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
              <h6 className="mb-0">Jacqueline Miller</h6>
              <a href="#" className="text-reset text-primary-hover small">
                hello@gmail.com
              </a>
              <hr />
            </div>

              <p align="center" color="dimmed" size="sm">
                {"Annunci online 2"}
              </p>
              <p align="center" color="dimmed" size="sm">
                {"Annunci online 2"}
              </p>

              <Button
                block
              >
                Contatta Agenzia
              </Button>
            </Card>
          </Col>
          <Col md={9}>
            <div className="section-head">
              <h1 className="page-title">Annunci</h1>
            </div>
            <HostListings />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    </>
  )
}

export default View;



