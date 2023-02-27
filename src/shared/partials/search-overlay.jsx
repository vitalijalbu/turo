import React, { useRef } from "react";
import Link from "next/link";
import {
  Input,
  Container,
  Row,
  Col,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";

const SearchOverlay = ({ opened, toggle }) => {
  return (
    <div id="search-overlay">
      <Offcanvas isOpen={opened} toggle={toggle} direction="top">
        <OffcanvasHeader toggle={toggle}>
          <div className="container">
            <Row>
              <Col>Ricerca su GardaToday</Col>
            </Row>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className="container">
            <Row>
              <Col>
                <div>
                  <Input />
                </div>
              </Col>
            </Row>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default SearchOverlay;
