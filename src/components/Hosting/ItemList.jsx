import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardContent,
  ListItem,
  Button,
  f7
} from "framework7-react";



const ItemList = ({ props }) => {

    /* Handle Delete */
    const handleDelete = () => {
      //console.log('deleting...', id);
      f7.dialog.confirm({
        title: "Sei sicuro di voler elimnare l'annuncio?",
        text: "data.message"
      });
      /*deleteCustomer({ id: data.id })
        .then(({ data }) => {
          f7.toast.show({
            text: data.message,
            horizontalPosition: "center",
            closeTimeout: 2500,
            cssClass: "success",
          });
          //f7.views.main.router.navigate("/customers", { reloadAll: true });
        })
        .catch((err) => {
          if (err?.message) {
            f7.toast.show({
              text: err.message,
              horizontalPosition: "center",
              closeTimeout: 2500,
              cssClass: "danger",
            });
          }
        });*/
    };

    
  return (
        <li>
            <div className="item-content">
              {/**/}
              <div className="item-inner">
              <div className="img-responsive-wrapper">
              <div className="img-responsive">
                <figure className="img-wrapper">
                  <img
                    src="https://via.placeholder.com/310x190"
                    title="titolo immagine"
                    alt="descrizione immagine"
                  />
                </figure>
              </div>
            </div>
              </div>
              <div className="item-inner item-cell">
                 <div className="item-row display-flex justify-content-space-between align-items-center">
                 <a href={'/listings/'+props.id}>
                  <div className="item-cell"><h3>{props.title}</h3></div></a>
                </div>
                <div className="item-row">
                  <div className="item-cell">
                  <span className="text-meta">
            {props.type}
          </span>
                  </div>
                </div>   
                <div className="item-row">
                  <div className="item-cell">
                  <span className="text-price">
                    {props.currency_code} {props.pricing}
                  </span>
                  </div>
                </div> 
                <div className="item-row">
                  <div className="item-cell">
                    <p>{"Creato il " + props.dateCreated}</p>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="item-content">
            <div className="item-inner item-cell">
                <div className="item-row">
                  <div className="item-cell">
                    <div className="item-row">
                    <div className="item-cell">
                      <Button round color="blue" iconF7="pencil_ellipsis_rectangle" href="/hosting">Modifica</Button>
                    </div> <div className="item-cell">
                      <Button round color="blue" iconF7="eye" href="/listings/1000" target="_blank">Visualizza</Button>
                    </div>
                    <div className="item-cell">
                      <Button round color="blue" iconF7="chart_bar_circle">Analisi</Button>
                    </div> <div className="item-cell">
                      <Button round color="blue" iconF7="hand_draw_fill">Sponsorizza</Button>
                    </div>
                    <div className="item-cell">
                      <Button round iconF7="trash" color="red" onClick={handleDelete}>Elimina</Button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </li>
  );
};

export default ItemList;
