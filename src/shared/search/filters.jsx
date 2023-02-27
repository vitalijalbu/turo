import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Pricing from "./filters/pricing";
import Category from "./filters/category";
import Spotlight from "./filters/spotlight";
import Locale from "./filters/local";
import Sale from "./filters/sale";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import FiltersDrawer from "./filters-popup";

const Filters = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  /* actions */
  const toggleSideFilters = () => setFiltersOpen(!filtersOpen);

  return (
    <>
      <FiltersDrawer opened={filtersOpen} toggle={toggleSideFilters}/>
      <div className="d-flex align-items-center">
         <div className="filters-block me-2">
         <Spotlight/>
        </div>
        <div className="filters-block me-2">
         <Category/>
        </div>
        <div className="filters-block me-2">
         <Sale/>
        </div>
        <div className="filters-block me-2">
         <Locale/>
        </div>
        <div className="filters-block me-2">
        <Pricing/>
        </div>
        <div className="filters-block">
                  <Button outline onClick={toggleSideFilters} leftIcon={<IconAdjustmentsHorizontal />}>Altri filtri</Button>
                </div>
        </div>
        </>
  )
}
export default Filters;
