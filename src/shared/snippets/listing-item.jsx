import React, {useState } from "react";
import Link from "next/link";
import {Flex, Box, Image, Text } from "@chakra-ui/react";
import {IconArrowAutofitContent, IconHeart, IconShare, IconStairs, IconMapPin } from '@tabler/icons-react';
import ListingSwiper from "./listing-swiper";


const ListingItem = ({data }) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    console.log('added')
  };

  return (
    <Box className="item-listing">
    <Flex>
      <div className="item-media">
    <Link href={`/listings/${data.id}`}>
      <ListingSwiper media={data?.media_photos} />
      </Link>
    </div>
    <Box p="6">
    <Box>
    <Link href={`/search?city=${data.location.parts ? data.location.parts.city : null}`} className="mb-2 text-primary">
          <span>
            <IconMapPin/> {data.location ? data.location.parts.city : null}
          </span>
          </Link>
      </Box>
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        <Text fontSize="lg"><Link href={`/listings/${data.id}`}>{data.title}</Link></Text>
      </Box>
      <Box d="flex" alignItems="baseline">
        <Text fontWeight="semibold" fontSize="sm" color="gray.500" mr="2">
          {data?.beds} Beds
        </Text>
        <Text fontWeight="semibold" fontSize="sm" color="gray.500" mr="2">
          {data?.baths} Baths
        </Text>
        <Text fontWeight="semibold" fontSize="sm" color="gray.500" mr="2">
          {data?.size} sqft
        </Text>
      </Box>





      <Box d="flex" mt="2">
        <Box fontWeight="semibold" fontSize="lg" color="purple.500" mr="2">
          ${data?.price}
        </Box>
      </Box>
    </Box>
    </Flex>
  </Box>
  
  )
}

export default ListingItem;
