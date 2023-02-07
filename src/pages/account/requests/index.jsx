import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import Head from "@/shared/account/head";
import { IconMessage2 } from "@tabler/icons-react";
import * as dayjs from 'dayjs';
import { getAllRequests } from "@/lib/graphql/queries/requests";
import PopupRequest from "@/shared/account/popup-request";

const Index = () => {
  const [data, setData] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
   /* actions */ 
   const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    getAllRequests().then((data) => {
      setData(data?.entries || []);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <>
    {navOpen && <PopupRequest opened={navOpen} toggle={openSideNav} />}
    <div className="page">
      <Head
        title={"Richieste"}
      />
      <Container size="xl">
        <Row>
          <Col md={12}>
              {data.map((request) => (
            <div className="card border mb-4" key={request.id}>
  {/* Card header */}
  <div className="card-header border-bottom d-md-flex justify-content-md-between align-items-center">
    {/* Icon and Title */}
    <div className="d-flex align-items-center">
      <div className="icon-lg bg-light rounded-circle flex-shrink-0">
        <IconMessage2 />
      </div>
      {/* Title */}
      <div className="ms-2">
        <h6 className="card-title mb-0">{request?.author.fullName}</h6>
        <ul className="nav nav-divider small">
          <li className="nav-item">{`Numero: #${request.id}`}</li>
        </ul>
      </div>
    </div>
    {/* Button */}
    <div className="mt-2 mt-md-0">
      <Button color="dark" onClick={openSideNav}>
        Vedi dettagli
      </Button>
    </div>
  </div>
  {/* Card body */}
  <div className="card-body">
    <div className="row g-3">
      <div className="col-sm-6 col-md-4">
        <span>Messaggio</span>
        <h6 className="mb-0">{request.message}</h6>
      </div>
      <div className="col-sm-6 col-md-4">
        <span>Zona</span>
        <h6 className="mb-0">{request?.location?.parts.city}</h6>
      </div>
      <div className="col-md-4">
        <span>Data richiesta</span>
        <h6 className="mb-0">{dayjs(request.dateCreates).format('MMM D, YYYY')}</h6>
      </div>
    </div>
  </div>
</div>

          ))}
        </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Index;
