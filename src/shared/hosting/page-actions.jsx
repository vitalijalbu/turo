import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Flex, Button, Spacer } from "@chakra-ui/react";

const PageActions = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
<section className="page-actions">
  <div className="container">
  
  <Flex className="filter-popover_footer">
            <Button variant="outline">Chiudi</Button>
            <Spacer />
            {props.nextUrl && (
                  <Link href={`/hosting/${id}${props.nextUrl}`}>
                    <Button colorScheme="blue">
                      Continua
                  </Button>
                  </Link>
                )}
            </Flex>
    </div>
</section>

  );
};

export default PageActions;

