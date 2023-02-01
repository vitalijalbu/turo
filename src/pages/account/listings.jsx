import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Page,
  Navbar,
  Subnavbar,
  NavLeft,
  NavRight,
  NavTitle,
  Preloader,
  Block,
  Chip,
  BlockTitle,
  Button,
  Popover,
  List,
  ListItem, f7
} from "framework7-react";
import HelpHosting from "@/components/Account/HelpHosting";
import PageHead from "@/components/Account/PageHead";
import SectionList from "@/components/Account/SectionList";


const Customers = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [popup, setPopup] = useState(false);
  const [query, setQuery] = useState('');
  const [form, setFormValues] = useState({});

  console.log('data-index', form);
  /* Query get data
  const getCustomers = useCallback((query) => {
    getAllCustomers(query)
      .then(({ data }) => {
        setCustomers(data?.data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getCustomers(query);
  }, [getCustomers, query]);

  /* Input change parent state
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  

  /* Query create data 
  const handleSubmit = (e) => {
    e.preventDefault();
    const listing_id = import.meta.env.VITE_APP_DEMO_LISTING_ID;
    createCustomer({ ...form, listing_id })
      .then(({ data }) => {
        getCustomers();
        setFormValues('');
        f7.toast.show({text: data.message, horizontalPosition: 'center', closeTimeout: 2500, cssClass: 'success'});
        setPopup(false);
      })
      .catch((err) => {
        if (err?.message) {
          f7.toast.show({text: err.message, horizontalPosition: 'center', closeTimeout: 2500, cssClass: 'danger'});
        }
      })
      .finally((data) => {
        setLoading(false);
      });
  };
  /* Toggle Create Popup */



  return(
    <Page>
    <section className="page-heading">
    <div className="container">
      <div className="page-back_btn display-flex justify-content-space-between align-items-center">
        <Button round href="/account" iconF7="arrow_left" divor="black" reloadAll={true}>
              Indietro
            </Button>
            </div>
    <div className="display-flex justify-content-space-between align-items-center">
    <div className="">
        <h1 className="page-title">I miei annunci</h1>
      </div>
      <div className="">
      <Button fill round divor="primary" href="/hosting/create" iconF7="plus" reloadAll={true}>
              Aggiungi un nuovo annuncio
            </Button>
      </div>
    </div>
  </div>
  </section>

    <section className="padding-vertical-xl">
      <div className="container">
      <div className="container">
        <div className="grid">
          
          <div className="col-md-8 col-xs-12">
          <BlockTitle large>Totale annunci (2)</BlockTitle>
            <SectionList/>
          </div>
          <div className="col-md-4 col-xs-12">
          <HelpHosting/>
          </div>
        </div>
      </div>
      </div>
      </section>


    </Page>

  
  );
}

export default Customers;
