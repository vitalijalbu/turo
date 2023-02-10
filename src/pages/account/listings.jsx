import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Group,
  Avatar,
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

const Listings = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const [popupContact, setContactPopup] = useState(false);

  useEffect(() => {
    getUserListings().then((res) => {
      setEntries(res?.entries);
      console.log("entries", res);
    });
  }, []);

  /* Confirm */
  const handleDelete = () => {
    confirm({
      title: "Sei sicuro di voler eliminare l'annuncio?",
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

  /* Confirm */
  const handleArchive = () => {
    confirm({
      title: "Sei sicuro di voler archiviare l'annuncio?",
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
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };

  return (
    <>
          {popupContact && (
        <PopupStatus opened={popupContact} toggle={toggleContactPopup} />
      )}
    <div className="page">
      <PageHead
        title={"I miei annunci"}
        primaryAction={{
          url: "/hosting/create",
          content: "Crea un nuovo annuncio",
        }}
      />
      <div className="page-content">
        <Container>
          <Row>
            <Col md={12}>
              <Nav pills>
                <NavItem>
                  <NavLink href="#" active>
                    Annunci attivi
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Annunci archiviati</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {Array.isArray(entries) ? (
                <table class="table">
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <th scope="row">
                          <div class="d-flex align-items-center">
                            <div className="avatar avatar-xl mb-2">
                              <img
                                src={
                                  entry.media_photos[0]?.url ??
                                  "/img/placeholder.svg"
                                }
                                className="avatar-img rounded-circle border border-2 border-white"
                              />
                            </div>

                            <div class="ms-2">
                              <h5 class="mb-1">
                                <Link
                                  class="text-primary"
                                  href={`/lavoro/${entry.id}`}
                                  data-focus-mouse="false"
                                >
                                  {entry.title}
                                </Link>
                              </h5>
                              <span className="text-blue">
                                {entry?.pricing ?? "Trattativa riservata"}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <Badge>{entry?.listing_status}</Badge>
                        </td>
 <td>
                          <span className="d-block">{`Creato il ${entry?.dateCreated}`}</span>
                          <span className="d-block">{`Ultima modifica ${entry?.dateUpdated}`}</span>
                        </td>

                        <td>
                          <div className="hstack gap-2 mt-3 mt-sm-0">
                            <UncontrolledDropdown>
                              <DropdownToggle caret outline>
                                Azioni
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>
                                  <Link href={`/account/hosting/${entry.id}`}>
                                    Modifica
                                  </Link>
                                </DropdownItem>
                                <DropdownItem onClick={toggleContactPopup}>
                                  Stato dell'annuncio
                                </DropdownItem> 
                                <DropdownItem onClick={handleArchive}>
                                  Archivia
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
