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
import {useDropzone} from 'react-dropzone';
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PopupLayout from "layouts/popup";

const Photos = () => {
  const [progressValue, setProgressValue] = useState(10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <PopupLayout urlClose={"/account/listings"}>
      <div className="page p-0">
        <div className="page-content p-0 d-flex">
          <div className="container">
          <div className="row">
          <div className="col-md-3 hosting-aside" style={{ width: "24%" }}>
            <div className="col">
              <SideNav />
            </div>
          </div>
         
          <div className="col-md-9">
          <div className="hosting-page">
            <div className="container">
              <ProgressBar nextUrl={"/pricing"} value={progressValue} />
              <div className="row">
                <div className="pb-2">
                <h1 className="section-title">Aggiungi foto</h1>
                  <p className="mb-0">
                    Praise effects wish change way and any wanted. Lively use
                    looked latter regard had.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="section-content pb-3 mb-3 border-bottom">
                      <h2 className="section-title">Informazioni</h2>
                      <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </div>
                  </form>

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

export default Photos;
