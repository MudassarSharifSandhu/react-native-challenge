import { Badge, Box, Button, Checkbox, Icon, Modal, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { activity } from "../dummy-data/activitydata";
import {
  Collectables,
  Defi,
  Exchanges,
  Games,
  MarketPlaes,
  Utilities,
} from "./icons";
import SvgCircularImage from "./icons/CircularImage";
import SvgCreateAccount from "./icons/CreateAccount";
import SvgDropDown from "./icons/DropDown";
import SvgFilterIcon from "./icons/FilterIcon";
import SvgImportAccount from "./icons/ImportAccount";
import MediaForActivity from "./MediaForActivity";
const FilterItemModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState("");
  const [selectItemsNo, setSelectedNo] = useState(0);
  const [selectedItem, setSelectedItem] = useState([
    { name: "Exchanges", Icon: Exchanges, isChecked: false },
    { name: "Games", Icon: Games, isChecked: false },
    { name: "MarketPlaces", Icon: MarketPlaes, isChecked: false },
    { name: "Defi", Icon: Defi, isChecked: false },
    { name: "Collectables", Icon: Collectables, isChecked: false },
    { name: "Other", Icon: Utilities, isChecked: false },
  ]);
  const onPress = (title, dec) => {
    setShowModal(false);
    setService(title);
  };
  const selectAllExp = () => {
    let values = [...selectedItem];
    let newValue = [];
    let checkAllTrue = values.filter((f) => f.isChecked === false);
    if (checkAllTrue.length === 0) {
      checkAllTrue = false;
    } else {
      checkAllTrue = true;
    }
    values.forEach((item) => {
      newValue.push({ ...item, isChecked: checkAllTrue });
    });

    setSelectedItem(newValue);
  };
  useEffect(() => {
    const num = selectedItem.filter((f) => f.isChecked).length;

    setSelectedNo(num);
  }, [selectedItem]);
  const onSelectItem = (index) => {
    let values = [...selectedItem];
    let check = values[index].isChecked;
    if (check) {
      values[index] = { ...values[index], isChecked: false };
    } else {
      values[index] = { ...values[index], isChecked: true };
    }

    setSelectedItem(values);
  };

  return (
    <>
      <Button
        w="15%"
        variant="ghost"
        onPress={() => setShowModal(true)}
        leftIcon={<Icon as={<SvgFilterIcon height="30" width="30" />} />}
      ></Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={"90%"} marginBottom="auto" marginTop={"60px"}>
          <Box
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Box
              mt="2"
              justifyContent={"flex-start"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"row"}
              height={"40px"}
              py="5"
              pl="5"
              ml="5"
            >
              <Text>Filter</Text>
              <Box
                width="25px"
                height="25px"
                backgroundColor={"blue.500"}
                borderWidth={1}
                borderRadius={"100"}
                ml="1"
              >
                <Text color="#FFFFFF" textAlign={"center"} fontSize={14}>
                  {selectItemsNo > 0 && selectItemsNo}
                </Text>
              </Box>
            </Box>
            <Box mb={"auto"}>
              <Modal.CloseButton />
            </Box>
          </Box>
          <Box width="100%" marginTop={10}>
            <Text ml="8">
              <Checkbox
                isChecked
                onChange={selectAllExp}
                colorScheme="blue"
                value={"all"}
              >
                All Experiences
              </Checkbox>
            </Text>
            {selectedItem.map((item, index) => {
              const { name, Icon: MyIcon } = item;
              return (
                <Checkbox
                  key={index}
                  ml="8"
                  my="2"
                  isChecked={item.isChecked}
                  colorScheme="blue"
                  fontSize={"16px"}
                  value={name}
                  onChange={() => onSelectItem(index)}
                >
                  <Icon ml="4" as={<MyIcon width="30px" height="30px" />} />
                  {name}
                </Checkbox>
              );
            })}
          </Box>

          <Box borderWidth={0.5} borderColor="#DFDFE0" width={"100%"}></Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default FilterItemModal;
