import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AspectRatio, Image, Button, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import MediaPopup from "@/shared/listings/MediaPopup";


const Gallery = ({ props }) => {
  const [popupMedia, setMediaPopup] = useState(false);
       /* Toggle Item Popup */
       const toggleMediaPopup = () => {
        setMediaPopup(!popupMedia);
      };

  return (
    <>
    {popupMedia && <MediaPopup opened={popupMedia} toggle={toggleMediaPopup}/>}
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
       <AspectRatio ratio={16 / 9}>
      <Image
        src="https://via.placeholder.com/1200"
      />
    </AspectRatio>
      <Grid gutter="md">
        <Grid.Col>
        <AspectRatio ratio={16 / 9}>
      <Image
        src="https://via.placeholder.com/1200"
      />
    </AspectRatio>
        </Grid.Col>
        <Grid.Col span={6}>
        <AspectRatio ratio={16 / 9}>
      <Image
        src="https://via.placeholder.com/1200"
      />
    </AspectRatio>
        </Grid.Col>
        <Grid.Col span={6}>
        <AspectRatio ratio={16 / 9}>
      <Image
        src="https://via.placeholder.com/1200"
      />
    </AspectRatio>
                  </Grid.Col>
      </Grid>
      <Button.Group className="gallery-cta">
      <Button variant="default" onClick={toggleMediaPopup}>Vedi più foto</Button>
      <Button variant="default" onClick={toggleMediaPopup}>Pianimetria</Button>
      <Button variant="default" onClick={toggleMediaPopup}>Video</Button>
      <Button variant="default" onClick={toggleMediaPopup}>360° Tour</Button>
    </Button.Group>
    </SimpleGrid>
    </>
  );
}
export default Gallery;