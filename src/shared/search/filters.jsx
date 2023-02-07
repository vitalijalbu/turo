import React, { useState, useEffect } from "react";
import AddressField from "@/shared/form-fields/address-field";
import TypeDropdown from "@/shared/form-fields/type-dropdown";
import Pricing from "./filters/pricing";
import Category from "./filters/category";
import Action from "./filters/action";
import Auction from "./filters/auction";


const Filters = () => {



  return (
      <div className="d-flex align-items-center">
        <div className="filters-block me-2">
         <Action/>
        </div>
        <div className="filters-block me-2">
        <Category/>
        </div>
        <div className="filters-block me-2">
        <Pricing/>
        </div>
        <div className="filters-block me-2">
        <Auction/>
        </div>

        </div>
  )
}
export default Filters;
