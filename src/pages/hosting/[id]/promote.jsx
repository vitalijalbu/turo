import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import ProgressBar from "@/shared/hosting/progress";
import HelpBox from "@/shared/components/help-box";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PopupLayout from "layouts/popup";

const Promote = () => {
  const [progressValue, setProgressValue] = useState(10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PopupLayout urlClose={"/account/listings"}>
      <div className="page p-0">
        <div className="page-content p-0 d-flex">
          <div className="container">
          <h1 className="section-title">Crea un nuovo annuncio</h1>
          <div className="row">
          <div className="col-md-3 hosting-aside" style={{ width: "24%" }}>
            <div className="col">
              <SideNav />
            </div>
          </div>
         
          <div className="col-md-9">
          <div className="hosting-page">
            <div className="container-sm">
              <ProgressBar nextUrl={"/pricing"} value={progressValue} />
              <div className="row">
                <div className="py-2">
                  
                  <p className="mb-0">
                    Praise effects wish change way and any wanted. Lively use
                    looked latter regard had.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
promozione

                  <PageActions nextUrl={"/pricing"} />
                </div>
                <div className="col-md-4">
                  <HelpBox />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default Promote;
