import React, { useState, useEffect } from "react";
import { Page, Card, CardContent, Link, Block, List, ListItem, Icon, Button, BlockTitle, div } from "framework7-react";
import HostListings from "@/components/Hosts/HostListings";

const View = () => {
  const [loading, setLoading] = useState(false);
  const [popupReach, setReachPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});


    /* Toggle Item Popup */
    const openReachPopup = () => {
      setReachPopup(true);
    };
    const closeReachPopup = () => {
      setReachPopup(false);
    };
     /* Toggle Item Popup */
    const openSharePopup = () => {
      setSharePopup(true);
    };
    const closeSharePopup = () => {
      setSharePopup(false);
    };

  /* Input change parent state */
  const changeHandler = (e) => {
    e.preventDefault();
      setFormValues((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
      });
  };

        /* Toggle Edit */
        const handleUpdate = () => {
          console.log('popup-form', form);
          /*updateItem(form)
            .then(({ data }) => {
              closeReachPopup();
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
    <Page>
      <div className="container pt-4">
        <div className="grid">
        <div  className="col-md-4 col-xs-12">
          <Card>
          <CardContent className="card-content padding">
              <div className="">
              <List mediaList noChevron>
                  <ListItem title="Hosting title" subtitle="Membro dal 20/02/2021" link="/hosts/1000">
                    <img
                      slot="media"
                      className="avatar-img"
                      src="https://via.placeholder.com/80"
                    />
                  </ListItem>
                        <ListItem
                          title="Tipo account"
                          link="/settings"
                          after={"Agenzia"}
                        /> 
                        <ListItem
                          title="Totale annunci"
                          link="/hosting/listings"
                          after={2}
                        />
                  </List>
              </div> 
              <div className="">
                <div className="py-2">
                  <Button fill large color="black" onClick={openReachPopup}>Contatta</Button>
                </div>
                <div className="py-2">
                  <Button outline large iconF7="square_arrow_up" onClick={openSharePopup}>Condividi</Button>
                </div> 
              </div>
            </CardContent>
            </Card>
            <div className="text-align-center py-2">
                  <Link href="#"><Icon f7="flag"/>Segnala</Link>
                </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <BlockTitle large>Annunci</BlockTitle>
            <HostListings/>
          </div>
         
        </div>
      </div>
    </Page>
    </>
  );
};

export default View;
