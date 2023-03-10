import React, { useState, useEffect } from "react";

import {
  
  Badge,
  Stack,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar
} from "@chakra-ui/react";
import confirm from "@/shared/components/confirm";
import PageHead from "@/shared/account/page-head";
import { getUserListings } from "@/lib/graphql/queries/user";
import Link from "next/link";
import PopupStatus from "@/shared/hosting/popup-status";
import { IconChartBar, IconChevronDown } from "@tabler/icons-react";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

const Listings = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [popupStatus, setStatusPopup] = useState(false);
  const [archived, setArchived] = useState(false);

  const setTabs = () => {
    setArchived(!archived);
    setLoading(true);
  };

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
  };

  /* Confirm */
  const handleDelete = () => {
    confirm({
      title: "Sei sicuro di voler eliminare l'annuncio?",
      message: "auth.logout_cta",
      cancelText: "Annulla",
      confirmText: "Elimina",
      confirmdivor: "danger",
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
        <PopupStatus
          opened={popupStatus}
          toggle={toggleStatusPopup}
          id={selected}
        />
      )}
      <div className="page">
        <div className="page-content">
          <PageHead
            title={"I miei annunci"}
            primaryAction={{
              url: "/hosting/create",
              content: "Crea un nuovo annuncio",
            }}
          />

          <div className="container">
            <div className="row">

            </div>
            <div>
            <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab>Annunci attivi (3)</Tab>
    <Tab>Annunci archiviati</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>

              {Array.isArray(entries) ? (
                <table className="table">
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <th scope="row">
                          <div className="d-flex justify-content-start">
                            <div className="avatar avatar-xl mb-2">
                              <Avatar
                              size="lg"
                                src={
                                  entry.media_photos[0]?.url ??
                                  "/img/placeholder.svg"
                                }
                              />
                            </div>

                            <div className="ms-2 text-start">
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
                              <div className="d-block">
                                <Badge colorScheme="green">
                                  {entry?.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td>
                          <span className="d-block">{`Creato il ${entry?.dateCreated}`}</span>
                          <span className="d-block">{`Ultima modifica ${entry?.dateUpdated}`}</span>
                        </td>

                        <td className="text-end">
                          <div className="d-flex justify-content-end">
                            <div className="me-1">
                              <Button
                                variant="outline"
                                as={Link}
                                href={`/hosting/${entry.id}/promote`}
                                leftIcon={<IconChartBar />}
                              >
                                Promuovi
                              </Button>
                            </div>
                            <div>
                              <Menu>
                                <MenuButton
                                  as={Button}
                                  variant="outline"
                                  rightIcon={<IconChevronDown />}
                                >
                                  Azioni
                                </MenuButton>
                                <MenuList>
                                  <MenuItem>
                                    <Link href={`/hosting/${entry.id}`}>
                                      Modifica
                                    </Link>
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => toggleStatusPopup(entry.id)}
                                  >
                                    Stato dell'annuncio
                                  </MenuItem>
                                  <MenuDivider />
                                  <MenuItem onClick={handleDelete} className="text-danger">
                                    Elimina
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>Nessun dato</div>
              )}
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
