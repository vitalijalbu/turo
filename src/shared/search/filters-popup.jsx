import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import graphQLClient from "@/lib/graphql/client";
import { IconMinus, IconPlus, IconSearch } from "@tabler/icons-react";
import {
  Container,
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
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  Checkbox,
  CheckboxGroup,
  Center,
  Heading,
  RadioGroup,
  Radio,
  HStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
  Flex,
} from "@chakra-ui/react";

const FiltersPopup = ({ opened, toggle }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [open, setOpen] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleMenu = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const FOCUS_QUERY = `query{
    categories(group: "news", show_in_menu:true) {
      id
      title
      slug
    }
  }
  `;

  async function getData() {
    try {
      const response = await graphQLClient.request(FOCUS_QUERY);
      if (response) {
        setData(response);
      }
    } catch (err) {
      console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
            <Center>
              <Heading>Più filtri</Heading>
            </Center>
            <form>
              {/* Type */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Tipologia di vendita</h2>
                <Stack pl={6} mt={1} spacing={1}>
                  <Checkbox value="1">Attività con mura</Checkbox>
                  <Checkbox>Attività senza mura</Checkbox>
                  <Checkbox>Mura</Checkbox>
                </Stack>
              </Box>
              <hr />
              {/* Type */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Tipologia</h2>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </Box>
              <hr />
              {/* Status */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Stato</h2>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </Box>
              <hr />

              <FormControl as="fieldset" className="filter-block">
                <FormLabel as="legend">Favorite Naruto Character</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Sasuke">Sasuke</Radio>
                    <Radio value="Nagato">Nagato</Radio>
                    <Radio value="Itachi">Itachi</Radio>
                    <Radio value="Sage of the six Paths">
                      Sage of the six Paths
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
              </FormControl>
              <hr />
              <Box className="filter-block">
                <h2 className="filter-block_title">Prezzi</h2>
                <FormControl as="fieldset" className="filter-block">
                  <FormLabel as="legend">Favorite Naruto Character</FormLabel>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </FormControl>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </Box>
              <hr />
              {/* Pricing */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Prezzi</h2>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </Box>
              <hr />
              {/* Locals */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Superficie</h2>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min m&sup2;</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max m&sup2;</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </Box>
              <hr />
              {/* Luxury */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Lusso</h2>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Solo immobil idi lusso
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </Box>
              <hr />
              {/* Rooms */}
              <Box className="filter-block">
                <h2 className="filter-block_title">Numero di camere</h2>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <h3>Bagni</h3>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button>
                      <IconPlus />
                    </Button>
                    <Input value="1" />
                    <Button>
                      <IconMinus />
                    </Button>
                  </Box>
                </SimpleGrid>
                <Flex minWidth="max-content" alignItems="center" gap="2">
                  <h3>Camere</h3>
                  <Spacer />
                  <Button>
                    <IconPlus />
                  </Button>
                  <Input value="1" />
                  <Button>
                    <IconMinus />
                  </Button>
                </Flex>
              </Box>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="container">
            <Box>
              <Button variant="link" mr={"3"}>
                Annulla filtri
              </Button>
              <Button
                colorScheme="blue"
                onClick={toggle}
                leftIcon={<IconSearch />}
              >
                Applica filtri
              </Button>
            </Box>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FiltersPopup;
