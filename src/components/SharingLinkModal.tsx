import { Box, Button, HStack, Icon, Modal, Text } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { SecondLink, ThirdLink, TwitterLogo } from "./icons";
import SvgCopySeed from "./icons/CopySeed";
import SvgLinkTo from "./icons/LinkTo";

const SharingLinkModal = () => {
  const [showModal, setShowModal] = useState(false);

  const onPress = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button onPress={onPress}>
        <Box flex={1} flexDirection={"row-reverse"} alignItems={"center"}>
          <Text textAlign={"right"} color="#587BE0" fontSize={"16px"} mr="5">
            Share it
          </Text>
          <Icon as={<SvgLinkTo height="15" width="15" />} ml={3} mr="2" />
        </Box>
      </Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={"90%"} marginBottom="auto" marginTop={"60px"}>
          <Box
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text my="4" mx="5" fontSize={"16px"} fontWeight={"600"}>
              Share this Experience
            </Text>

            <Box mb={"auto"}>
              <Modal.CloseButton />
            </Box>
          </Box>
          <Box my="5" mx="5" backgroundColor={"#EAEFFF"} py="5" px="1">
            <Text fontSize={"14px"} fontWeight={"500"} color={"#587BE0"}>
              https://nearlabs.app/app/docu_s...
            </Text>
          </Box>
          <Box
            px="2"
            mx="auto"
            mt="1"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Icon borderRadius={100} as={SvgCopySeed} width="20" height="20" />
            <Text color={"#885FFF"} fontSize={"14px"} textAlign={"center"}>
              {" "}
              Copy seed
            </Text>
          </Box>
          <HStack justifyContent={"center"} my="10">
            <Icon as={<TwitterLogo height="25" width="25" />} ml={3} mr="2" />
            <Icon as={<SecondLink height="25" width="25" />} ml={3} mr="2" />
            <Icon as={<ThirdLink height="25" width="25" />} ml={3} mr="2" />
          </HStack>
          <Box borderWidth={0.5} borderColor="#DFDFE0" width={"100%"}></Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SharingLinkModal;
