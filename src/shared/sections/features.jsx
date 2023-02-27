import Link from "next/link";
import {  Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react"
import data from "@/data/static.features.json";

const Features = () => {

  
    return (
      <div className="container">
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Stack>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          ico
        </Flex>
        <Text fontWeight={600}>deeee</Text>
        <Text color={"gray.600"}>dede</Text>

        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          ico
        </Flex>
        <Text fontWeight={600}>eee</Text>
        <Text color={"gray.600"}>sddcs</Text>
      </Stack>

          
        </SimpleGrid>
      </Box>
      </div>
    )
  }
  

export default Features;
