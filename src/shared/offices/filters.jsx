import { IconFilter } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";

const Filters = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  /* actions */
  const toggleSideFilters = () => setFiltersOpen(!filtersOpen);

  return (
    <section className="filters">
        <Container>
      <div className="d-flex align-items-center">
         <div className="filters-block me-2">
         <input className="form-control"/>
        </div>
        <div className="filters-block me-2">
         <Button color="dark"><IconFilter/> Filtra</Button>
        </div>
        </div>
        </Container>
        </section>
    
  )
}
export default Filters;
