import React, { useRef } from 'react';
import { Modal, Tabs, Button, Group } from '@mantine/core';
import TabPhotos from './TabPhotos';
import TabPlanimetry from './TabPlanimetry';
import TabTour from './TabTour';
import TabVideo from './TabVideo';

const MediaPopup = ({ opened, toggle, data, props }) => {

  return (
    <Modal
    transition="fade"
    transitionDuration={400}
    transitionTimingFunction="ease"
    opened={opened}
    onClose={() => toggle()}
    size="70%"
  >
     <Tabs color="dark" variant="pills" radius="xl" defaultValue="photos">
      <Tabs.List>
        <Tabs.Tab value="photos">Foto</Tabs.Tab>
        <Tabs.Tab value="planimetry">Pianimetria</Tabs.Tab>
        <Tabs.Tab value="video">Video</Tabs.Tab>
        <Tabs.Tab value="tour">Virtual Tour</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="photos" pt="xs">
       <TabPhotos/>
      </Tabs.Panel>

      <Tabs.Panel value="planimetry" pt="xs">
      <TabPlanimetry/>
      </Tabs.Panel>  
      <Tabs.Panel value="video" pt="xs">
       <TabVideo/>
      </Tabs.Panel>

      <Tabs.Panel value="tour" pt="xs">
     <TabTour/>
      </Tabs.Panel>
    </Tabs>
  </Modal>
  );
}
export default MediaPopup;