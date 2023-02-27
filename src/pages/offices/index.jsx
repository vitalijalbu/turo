import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, Button } from "@chakra-ui/react";
import { getAllOffices } from "@/lib/graphql/queries/offices";
import Filters from "@/shared/offices/filters";
import PupupContact from "@/shared/components/popup-contact";
import { IconPhone, IconMail } from "@tabler/icons-react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [popupContact, setPopupContact] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getAllOffices().then((data) => {
      setEntries(data?.entries || []);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

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
  
  /* Toggle Phone Number */ 
  const handleRowClick = (value) => {
    if (value === selected) {
      // Clicked the same div twice, clear the selected value
      setSelected(null);
    } else {
      setSelected(value);
    }
  };

  return (
    <>
      {popupContact && (
        <PupupContact opened={popupContact} toggle={toggleContactPopup} />
      )}
    <div className="page">
      <div className="page-content">
        <Filters/>
      <div className="container">
        <div className="section-head">
          <h1 className="section-title">Agenzie</h1>
        </div>
        <div>
        <div md={12}>
              {Array.isArray(entries) ? (
                <table className="table">
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <th scope="div">
                          <div className="d-flex">
                              <Avatar
                                src={entry.avatarImg ? entry.avatarImg[0].url : '/img/placeholder.svg'}
                                className="avatar-img rounded-circle border border-2 border-white"
                              />
                            <div className="ms-2">
                              <h5 className="mb-1">
                                <Link
                                  href={`/offices/${entry.id}`}
                                  data-focus-mouse="false"
                                >
                                  {entry.title}
                                </Link>
                              </h5>
                              <span className="text-muted">
                                {entry.location ? entry.location.address : '-'}
                              </span>
                            
                            <div>
                            <span className="d-inline">{`Annunci online 22`}</span>
                            <span className="separator"> - </span>
                            <span className="d-inline">{`Membro dal ${entry?.dateCreated}`}</span>
                          </div>
                          </div>
                          </div>
                        </th>
                         <td className="text-end">
                         
                         <Button className="me-2" onClick={() => handleRowClick(entry?.phoneNumber)} leftIcon={<IconPhone />}>
                              {selected === entry?.phoneNumber ? entry?.phoneNumber : 'Mostra numero'}
                              </Button>
                         <Button leftIcon={<IconMail/>}>Invia messaggio</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>Nessun dato</div>
              )}
            </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Index;
