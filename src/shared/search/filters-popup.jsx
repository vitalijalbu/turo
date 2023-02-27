import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import graphQLClient from "@/lib/graphql/client";
import { IconMinus, IconPlus, IconSearch } from "@tabler/icons-react";
import {
  Grid,
  Stack,
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
          <div className="container-sm">
            <Center>
              <Heading>Più filtri</Heading>
            </Center>
            <form>
              {/* Type */}
              <div className="filter-block">
                <h2 className="filter-block_title">Tipologia di vendita</h2>
                <Stack pl={6} mt={1} spacing={1}>
                  <Checkbox value="1">Attività con mura</Checkbox>
                  <Checkbox>Attività senza mura</Checkbox>
                  <Checkbox>Mura</Checkbox>
                </Stack>
              </div>
              <hr />
              {/* Type */}
              <div className="filter-block">
                <h2 className="filter-block_title">Tipologia</h2>
                <div className="row" columns={2} spacing={10}>
                  <div className="col">
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div className="col">
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <hr />
              {/* Status */}
              <div className="filter-block">
                <h2 className="filter-block_title">Stato</h2>
                <div className="row" columns={2} spacing={10}>
                  <div>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
              </div>
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
              <div className="filter-block">
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
                <div className="row" columns={2} spacing={10}>
                  <div>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <hr />
              {/* Pricing */}
              <div className="filter-block">
                <h2 className="filter-block_title">Prezzi</h2>
                <div className="row" columns={2} spacing={10}>
                  <div>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <hr />
              {/* Locals */}
              <div className="filter-block">
                <h2 className="filter-block_title">Superficie</h2>
                <div className="row" columns={2} spacing={10}>
                  <div>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min m&sup2;</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl id="lastName">
                      <FormLabel>Max m&sup2;</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <hr />
              {/* Luxury */}
              <div className="filter-block">
                <h2 className="filter-block_title">Lusso</h2>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Solo immobil idi lusso
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </div>
              <hr />
              {/* Rooms */}
              <div className="filter-block">
                <h2 className="filter-block_title">Numero di camere</h2>
                <div className="row" columns={2} spacing={10}>
                  <div>
                    <h3>Bagni</h3>
                  </div>
                  <Spacer />
                  <div>
                    <Button>
                      <IconPlus />
                    </Button>
                    <Input value="1" />
                    <Button>
                      <IconMinus />
                    </Button>
                  </div>
                </div>
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
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="container">
            <div>
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
            </div>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FiltersPopup;
