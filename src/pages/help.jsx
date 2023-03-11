import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { IconArrowUpRight } from "@tabler/icons-react";
import data from "@/data/faqs.json";

const Help = () => {
  return (
    <div className="page">
    <div className="page-content">
    <section className="section-content faqs">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-title">Domande più frequenti</h2>
            <Accordion defaultOpen="1" flush>
              {data?.map((faq, i) => (
                <AccordionItem key={i}>
                  <AccordionButton targetId={i}>
                    <div className="d-flex">{faq.title}
                    <AccordionIcon/>
                    </div>
                  </AccordionButton>
                  <AccordionPanel accordionId={i}>
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.content }}
                    ></div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
            <div className="col-md-8 mx-auto d-block mt-3">
            <Link href="/help" target="_blank" passHref>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                rel="noopener noreferrer"
              >
                Vai al centro supporto <IconArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Help;
