import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

const PageActions = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
<section className="page-actions">

  <div className="d-flex justify-content-between border-top mt-3 pt-3">
            <Button variant="outline">Salva e Chiudi</Button>
           
            {props.nextUrl && (
                  <Link href={`/hosting/${id}${props.nextUrl}`}>
                    <Button colorScheme="blue">
                      Continua
                  </Button>
                  </Link>
                )}
            </div>
  
</section>

  );
};

export default PageActions;

