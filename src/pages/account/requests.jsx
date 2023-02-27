import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Avatar } from "@chakra-ui/react";
import PageHead from "@/shared/account/page-head";
import { IconChevronRight, IconMail, IconMessage2 } from "@tabler/icons-react";
import * as dayjs from "dayjs";
import { getAllRequests } from "@/lib/graphql/queries/requests";
import PopupRequest from "@/shared/account/popup-request";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  const [archived, setArchived] = useState(false);

  const setTabs = () => {
    setArchived(!archived);
    setLoading(true);
  };
  /* actions */
  const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    getAllRequests()
      .then((data) => {
        setEntries(data?.entries || []);
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {navOpen && <PopupRequest opened={navOpen} toggle={openSideNav} />}
      <div className="page">
        <div className="page-content">
          <PageHead title={"Richieste dei clienti"} />

          <div className="container">
            <div className="container">
              <div className="row subnav">
                <div className="col">
                  <ul>
                    <li href="#" onClick={setTabs} active={archived === false}>
                      Richieste specifiche (3)
                    </li>

                    <li href="#" onClick={setTabs} active={archived === true}>
                      ARichieste generiche (1)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {Array.isArray(entries) ? (
                    <table className="table">
                      <tbody>
                        {entries.map((entry) => (
                          <tr key={entry.id}>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <Avatar name={entry?.author.fullName} />
                                {/* Title */}
                                <div className="ms-2">
                                  <h6 className="card-title mb-0">
                                    {entry?.author.fullName}
                                  </h6>
                                  <ul className="list-unstyled">
                                    <li className="list-item">{`Numero: #${entry.id}`}</li>
                                  </ul>
                                </div>
                              </div>
                            </th>
                            <td>
                              <span className="d-block">{entry.message}</span>
                            </td>
                            <td>
                              <span className="d-block">{`Creato il ${entry?.dateCreated}`}</span>
                            </td>

                            <td className="text-end">
                              <Button
                                variant="outline"
                                onClick={openSideNav}
                                leftIcon={<IconMail />}
                                className="me-2"
                              >
                                Rispondi
                              </Button>
                              <Button
                                variant="outline"
                                onClick={openSideNav}
                                leftIcon={<IconChevronRight />}
                              >
                                Vedi dettagli
                              </Button>
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
      </div>
    </>
  );
};

export default Index;
