import React, { useState, useEffect } from "react";
import Link from "framework7-react";
import { Page, Block, Segmented, Icon, Button, BlockTitle, Breadcrumbs,
  BreadcrumbsItem, List, ListItem,
  BreadcrumbsSeparator, f7 } from "framework7-react";
import RelatedListings from "@/components/Search/RelatedListings";
import ContactPopup from "@/components/Listings/ContactPopup";
import ReportPopup from "@/components/Listings/ContactPopup";
import SharePopup from "@/components/Listings/SharePopup";

import Gallery from "@/components/Listings/Gallery";
import amenities from '@/data/amenities.json';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Listings/Map'), {
  ssr: false
});

const View = () => {
  const [loading, setLoading] = useState(false);
  const [popupReach, setContactPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [popupReport, setReportPopup] = useState(false);
  const [form, setFormValues] = useState({});


    /* Toggle Item Popup */
    const openContactPopup = () => {
      setContactPopup(true);
    };
    const closeContactPopup = () => {
      setContactPopup(false);
    };
     /* Toggle Item Popup */
    const openSharePopup = () => {
      setSharePopup(true);
    };
    const closeSharePopup = () => {
      setSharePopup(false);
    }; 
    
    /* Toggle Item Popup */
    const openReportPopup = () => {
      setReportPopup(true);
    };
    const closeReportPopup = () => {
      setReportPopup(false);
    };

  /* Input change parent state */
  const changeHandler = (e) => {
    e.preventDefault();
      setFormValues((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
      });
  };

  const addToFavorite = (e) => {
    e.preventDefault();
    f7.toast.show({
      text: "L'annuncio è stato aggiunto ai preferiti.",
      horizontalPosition: "center",
      closeTimeout: 2500,
    });
  };

        /* Toggle Edit */
        const handleUpdate = () => {
          console.log('popup-form', form);
          /*updateItem(form)
            .then(({ data }) => {
              closeContactPopup();
              setLoading(true);
              f7.toast.show({text: data.message, horizontalPosition: 'center', closeTimeout: 2500, cssClass: 'success'});
            })
            .catch((err) => {
              f7.toast.show({
                text: err.message,
                horizontalPosition: "center",
                closeTimeout: 2500,
                cssClass: "danger"
              });
            }).finally(() => {
              setLoading(false);
            });*/
        };
  


  return (
    <>
    <ContactPopup
      opened={popupReach} 
      close={closeContactPopup}
      data={form}
      onSubmit={handleUpdate}
      isLoading={loading} 
      onChange={changeHandler}
    />    
    <SharePopup
      opened={popupShare} 
      close={closeSharePopup}
      data={form}
    /> 
    <ReportPopup
      opened={popupReport} 
      close={closeReportPopup}
      data={form}
    />
    <Page>
      <div className="container">
        <div className="grid margin-vertical">
          <div className="col">
            <div className="display-flex justify-content-space-between align-items-top">
            <div className="">
                <h1>Demo listing here</h1>
            </div>
            <div className="flex-shrink-0 text-align-right">
            <div className="display-flex justify-content-space-between align-items-top">
            <Button round color="blue" iconF7="heart" className="margin-horizontal" onClick={addToFavorite}>Salva</Button>
            <Button round color="blue" iconF7="square_arrow_up" onClick={openSharePopup}>Condividi</Button>
            </div>
            </div>
            </div>
          </div>
          <div className="col-12">
          <Breadcrumbs>
        <BreadcrumbsItem>
          <Link href="/">Home</Link>
        </BreadcrumbsItem>
        <BreadcrumbsSeparator />
        <BreadcrumbsItem>
        <Link href="/search">Ricerca</Link>
        </BreadcrumbsItem>
        <BreadcrumbsSeparator />
        <BreadcrumbsItem active>Phones</BreadcrumbsItem>
      </Breadcrumbs>
          </div>
          <div className="grid">
          <div className="col">
              {/* Block details */}
              <Gallery/>
            </div>
            </div>
        </div>
        <div className="grid">
          <div className="col-md-8">
             {/* Block description */}
             <section className="py-4 listing-data_section" id="listing-info">
            <BlockTitle large>Informazioni sulla struttura</BlockTitle>
            <span className="text-muted">{"Pubblicato 5 giorni fa"}</span>
            <div className="display-flex">
              <div className="listing-info">
                <span>Località</span>
                <Link href={"/search?location=brescia"} target="_blank">Brescia</Link>
              </div>
            </div>
            <BlockTitle large>Demo listing here</BlockTitle>
            <Block className="py-2-xl">
            <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
              </Block>
              {/* Block details */}
              
              <BlockTitle>Disponibilità</BlockTitle>
              <Block>
            <span>Disponibile dal 10-06-2023</span>
      
              </Block> 
              <BlockTitle>Prezzo</BlockTitle>
              <Block>
            <div className="data-table amenities">
              <table>
                <tbody>
                  <tr>
                    <td className="label-cell">Prezzo</td>
                    <td><span className="text-primary">€4.000.000</span></td>
                  </tr> 
                   <tr>
                    <td className="label-cell">Tipologia</td>
                    <td>Hotel</td>
                  </tr> 
                  <tr>
                    <td className="label-cell">Superficie</td>
                    <td>Affitto</td>
                  </tr> 
                  <tr>
                    <td className="label-cell">Ultimo rinnovo:</td>
                    <td>Affitto</td>
                  </tr> 
                   <tr>
                    <td className="label-cell">Codice di rif.</td>
                    <td className="text-primary">#1011</td>
                  </tr> 
                </tbody>
              </table>
            </div>
              </Block> 
              </section>
              {/* Block Map */}
              <section className="py-4 listing-data_section" id="listing-details">
              <BlockTitle>Dettagli</BlockTitle>
            <Block>
            <div className="data-table amenities">
              <table>
              <tbody>
                  <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td>2</td>
                  </tr> 
                   <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td><Icon f7="checkmark_alt"></Icon></td>
                  </tr> 
                  <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td><Icon f7="checkmark_alt"></Icon></td>
                  </tr>
              </tbody>
              </table>
            </div>

              </Block>
              </section>
              {/* Block Map */}
              <section className="py-4 listing-data_section" id="listing-amenities">
              <BlockTitle>Dimensioni</BlockTitle>
            <Block>
            <div className="data-table amenities">
              <table>
                <tbody>
                  <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td><Icon f7="checkmark_alt"></Icon></td>
                  </tr>
                </tbody>
              </table>
            </div>
              </Block> 
              </section>  
              {/* Block Map */}
              <section className="py-4 listing-data_section" id="listing-amenities">
              <BlockTitle>Servizi e complementi</BlockTitle>
            <Block>
            {Array.isArray(amenities.data) && amenities.data.length > 0 ? (
         <ul className="list-amenities">
          {amenities.data.map((item, i) => (
              <li key={i}>
              <div><Icon f7="checkmark_alt" color="primary"></Icon>{item.title}</div>
            </li>
          ))}
        </ul>
      ) : (
        <Block strong>Nessun dato</Block>
      )}

              </Block> 
              </section>
               <section className="py-4 listing-data_section">
            <BlockTitle>Spazi</BlockTitle>
            <Block>
            <div className="data-table amenities">
              <table>
                <tbody>
                  <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td>2</td>
                  </tr> 
                   <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td><Icon f7="checkmark_alt"></Icon></td>
                  </tr> 
                  <tr>
                    <td className="label-cell">Servizio demo</td>
                    <td><Icon f7="checkmark_alt"></Icon></td>
                  </tr>
                </tbody>
              </table>
            </div>
            </Block>
              </section> 
              
              {/* Block Map */}
              <section className="py-4 listing-data_section" id="listing-amenities">
              <BlockTitle>Mappa</BlockTitle>
            <Block>
            <Map/>
              </Block>
              </section>
          </div>

          {/* Listing Aside div */}
          <div className="col-md-4">
          <div className="card bordered">
          <div className="card-content padding">
              <div tag="div">
                <div className="text-align-center">
                <List mediaList noChevron noHairlines noHairlinesBetween>
                  <ListItem title="Hosting title" subtitle="Membro dal 20/02/2021" link="/hosts/1000">
                    <img
                      slot="media"
                      className="avatar-img"
                      src="https://via.placeholder.com/80"
                    />
                  </ListItem>
                  </List>
                </div>
              </div> 
              <div tag="div">
                <div className="py-2">
                  <Button round fill large color="black" onClick={openContactPopup}>Contatta</Button>
                </div> 
                <div className="text-align-center py-2">
                <Link href="/hosts/1000">
              Più annunci del venditore
              </Link>
                </div> 
               
              </div>
            </div>
            </div>
            <div className="text-align-center py-2">
                  <Button round><Icon f7="flag"/>Segnala questo annuncio</Button>
                </div>
          </div>
        </div>
      </div>
      <RelatedListings props="place_id"/>
    </Page>
    </>
  );
};

export default View;