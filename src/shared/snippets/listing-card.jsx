import React, { useState } from "react";
import Link from "next/link";
import { Box, Badge } from "@chakra-ui/react";
import { IconStairs, IconMapPin } from "@tabler/icons-react";
import ListingSwiper from "./listing-swiper";

const Item = ({ data }) => {
  return (
<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom={3} as="article">
  
  <Link href={`/listings/${data?.id}`}>
          <ListingSwiper media={data?.media_photos} />
        </Link>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {data.beds} beds &bull; {data.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {data.title}
        </Box>

        <Box>
          {data.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {data.pricing ?? null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
