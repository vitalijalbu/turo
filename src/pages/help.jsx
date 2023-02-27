import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  
  Button,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import { IconArrowUpRight } from "@tabler/icons-react";
import data from "@/data/faqs.json";

const Help = () => {
  return (
    <section className="section-content faqs">
      <div className="container">
        <Row>
          <Col lg={8} md={12} className="mx-auto">
            <h3>Domande più frequenti</h3>
            <UncontrolledAccordion defaultOpen="1" flush>
              {data?.map((faq, i) => (
                <AccordionItem key={i}>
                  <AccordionHeader targetId={i}>{faq.title}</AccordionHeader>
                  <AccordionBody accordionId={i}>
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.content }}
                    ></div>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </UncontrolledAccordion>

            <Link href="/help" target="_blank" passHref>
              <Button
                color="primary"
                size="sm"
                rel="noopener noreferrer"
                outline
              >
                Vai al centro supporto <IconArrowUpRight />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Help;
