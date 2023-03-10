import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HostListings from "@/shared/offices/host-listings";
import { Card, CardBody, Avatar, Button } from "@chakra-ui/react";
import {
  IconPhone,
  IconMail,
  IconBuildingEstate,
  IconDiscountCheck,
  IconWorldWww
} from "@tabler/icons-react";

import { viewOffice } from "@/lib/graphql/queries/offices";
import PupupContact from "@/shared/components/popup-contact";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [entry, setData] = useState();
  const [selected, setSelected] = useState(null);
  const [listings, setListings] = useState([]);
  const [popupContact, setPopupContact] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});

   /* Toggle Phone Number */ 
   const toggleContactPopup = (value) => {
    setPopupContact(!popupContact);
    if (popupContact === true) {
      // Clicked the same div twice, clear the selected value
      setSelected(value);
    } else {
      setSelected(null);
    }
  };   
  
  useEffect(() => {
    viewOffice(id)
    .then((data) => {
      setData(data?.entry);
      setListings(data?.entries);
    });
  }, []);

        /* Toggle Phone Number */ 
        const handledivClick = (value) => {
          if (value === selected) {
            // Clicked the same div twice, clear the selected value
            setSelected(null);
          } else {
            setSelected(value);
          }
        };


  return (
    <>
    {!popupContact && (<PupupContact opened={popupContact} toggle={toggleContactPopup}/>)}
    <div className="page">
    <div className="page-content">
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-xs-6">
            <Card variant="outline">
            <CardBody className="text-center mb-3">
              {/* Avatar */}
                <Avatar
                size="lg"
                  src={entry?.avatarImg.length > 0 ? entry.avatarImg[0].url : '/img/placeholder.svg'}
                  alt=""
                />
  
              <h3 className="mb-2 serif">{entry?.title}</h3>
              <span>{`Membro da ${entry?.dateCreated}`}</span>
              <ul className="list-unstyled">
                <li><IconDiscountCheck color="red" size={20}/> Identit?? verificata</li>
              </ul>
                      <hr/>
                      <div className="d-block">
                        <Button block color="dark" onClick={() => toggleContactPopup(entry?.id)}>
                          Contatta l'inserzionista
                        </Button>
                      </div>
                        </CardBody>
            </Card>
          </div>
          <div className="col-md-8 col-xs-12">
            <section className="section-content mt-0 mb-5">
            <div className="section-head">
              <h2 className="page-title">Informazioni</h2>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="list-item mb-2"><Button color="link" onClick={() => handledivClick(entry?.phoneNumber)}><IconPhone/> {selected === entry?.phoneNumber ? entry?.phoneNumber : "Mostra numero"}</Button></li>
                <li className="list-item mb-2" onClick={() => toggleContactPopup(entry?.id)}><IconMail/> Invia messaggio</li>
                {entry?.website && (
                  <li>
                    <Link href={entry.website} target="_blank">
                      <IconWorldWww /> Visita sito</Link>
                  </li>
                )}
              </ul>
            </div>
            </section>
            <section className="border-top section-content">
            <div className="section-head">
              <h2 className="page-title">Annunci pubblicati</h2>
            </div>
            <HostListings data={listings}/>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default View;



