import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getListingMedia } from "@/lib/graphql/queries/listings";
import {
  Grid,
  Stack,
  GridItem,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import TabPhotos from "./tab-photos";
import TabPlanimetry from "./tab-planimetry";
import TabTour from "./tab-tour";
import TabVideo from "./tab-video";

const PopupMedia = ({ opened, toggle }) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [planimetry, setPlanimetry] = useState([]);
  const [entry, setEntry] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");

  const toggleTab = (value) => {
    //console.log('tabs', value)
    if (activeTab !== value) {
      setActiveTab(value);
    }
  };

  useEffect(() => {
    getListingMedia(id)
      .then((data) => {
        setEntry(data?.entry || []);
        setPhotos(data?.entry.media_photos || []);
        setPlanimetry(data?.entry.media_planimetry || []);
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Modal
      size={"full"}
      onClose={toggle}
      isOpen={opened}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
  <div className="container">
  <Tabs isFitted variant='soft-rounded'>
  <TabList>
    <Tab>Foto</Tab>
    <Tab>Pianimetria</Tab>
    <Tab>Video</Tab>
    <Tab>Virtual Tour</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <TabPhotos data={photos} />
    </TabPanel>
    <TabPanel>
    <TabPlanimetry data={planimetry} />
    </TabPanel>
    <TabPanel>
    <TabVideo data={entry?.linkVideo} />
    </TabPanel> 
    <TabPanel>
    <TabTour data={entry?.linkVirtualTour} />
    </TabPanel>
  </TabPanels>
</Tabs>

          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default PopupMedia;
