import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import confirm from "@/shared/components/confirm/";
import PageHead from "@/shared/account/page-head";
import { getUserListings } from "@/lib/graphql/queries/user";
import Link from "next/link";
import PopupStatus from "@/shared/hosting/popup-status";
import Toolbar from "@/shared/account/toolbar";
import { IconChartBar } from "@tabler/icons-react";

const Listings = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [popupStatus, setStatusPopup] = useState(false);
  const [archived, setArchived] = useState(false);
  

  const setTabs = () =>{
    setArchived(!archived);
    setLoading(true);
  }


  useEffect(() => {
    getUserListings().then((res) => {
      setEntries(res?.entries);
      //console.log("entries", res);
    });
  }, []);


  const toggleTab = (value) => { 
    //console.log('tabs', value)
    if (activeTab !== value) {
      setActiveTab(value);
    }
  }


  /* Confirm */
  const handleDelete = () => {
    confirm({
      title: "Sei sicuro di voler eliminare l\'annuncio?",
      message: "auth.logout_cta",
      cancelText: "Annulla",
      confirmText: "Elimina",
      confirmColor: "danger",
    }).then((confirmed) => {
      if (confirmed) {
        dispatch(logout());
        //history.push('/');
        //window.location.href="/";
      }
    });
  };


  /* Toggle Item Popup */
  const toggleStatusPopup = (id) => {
    setStatusPopup(!popupStatus);
    setSelected(id);
  };

  return (
    <>
          {popupStatus && (
        <PopupStatus opened={popupStatus} toggle={toggleStatusPopup} id={selected}/>
      )}
    <div className="page">
      <PageHead
        title={"I miei annunci"}
        primaryAction={{
          url: "/hosting/create",
          content: "Crea un nuovo annuncio",
        }}
      />
      <Toolbar/>
      <div className="page-content">
        <Container>
          <Row>
            <Col md={12}>
              <Nav className="subnav" pills>
                <NavItem>
                  <NavLink href="#" onClick={setTabs} active={archived === false}>
                    Annunci attivi (3)
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={setTabs} active={archived === true}>Annunci archiviati (1)</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {Array.isArray(entries) ? (
                <table className="table">
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xl mb-2">
                              <img
                                src={
                                  entry.media_photos[0]?.url ??
                                  "/img/placeholder.svg"
                                }
                                className="avatar-img rounded-circle border border-2 border-white"
                              />
                            </div>

                            <div className="ms-2">
                              <h5 className="mb-1">
                                <Link
                                  className="text-primary"
                                  href={`/hosting/${entry.id}`}
                                  data-focus-mouse="false"
                                >
                                  {entry.title}
                                </Link>
                              </h5>
                              <span className="text-blue">
                                {entry?.pricing ?? "Trattativa riservata"}
                              </span>
                              <div className="d-block"><Badge pill color="primary">{entry?.status}</Badge></div>
                            </div>
                          </div>
                        </th>
 <td>
                          <span className="d-block">{`Creato il ${entry?.dateCreated}`}</span>
                          <span className="d-block">{`Ultima modifica ${entry?.dateUpdated}`}</span>
                        </td>

                        <td className="text-end">
                        <div className="d-flex">
                          <div className="me-1"><Button color="primary" size="sm"><IconChartBar/> Aumenta visibilità</Button></div>
                          <div>
                            <UncontrolledDropdown>
                              <DropdownToggle caret outline>
                                Azioni
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>
                                  <Link href={`/hosting/${entry.id}`}>
                                    Modifica
                                  </Link>
                                </DropdownItem>
                                <DropdownItem onClick={() => toggleStatusPopup(entry.id)}>
                                  Stato dell'annuncio
                                </DropdownItem> 
                                <DropdownItem divider />
                                <DropdownItem
                                  onClick={handleDelete}
                                  className="text-danger"
                                >
                                  Elimina
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Row>Nessun dato</Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
};

export default Listings;
