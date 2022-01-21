import React, { useState } from "react";
import { Box, Icon, Modal,Text } from "native-base";
import SvgBackButton from "../icons/BackButton";
import SvgCircularImage from "../icons/CircularImage";
import SvgCreateAccount from "../icons/CreateAccount";
import SvgHomeButton from "../icons/HomeButton";
import SvgImportAccount from "../icons/ImportAccount";
import SvgNotification from "../icons/Notification";
import SvgSettings from "../icons/Settings";
import MediaForActivity from "../MediaForActivity";

export const HeaderDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState("");
  return (
    <>
      <Box
        minWidth={150}
        borderRadius="100"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        borderColor={"blue.100"}
        borderWidth={"1"}
        py="2"
        px="3"
      >
        <Box
          width={"7"}
          height={"7"}
          borderRadius={100}
          backgroundColor={"blue.100"}
          overflow={"hidden"}
        >
          <Icon
            as={<SvgCircularImage height="100%" width="100%" />}
            borderRadius="200"
          />
        </Box>
        <Text
          onPress={() => setShowModal(true)}
          overflow={"hidden"}
          width={"100"}
          numberOfLines={1}
        >
          johndoe.near signed the contract successfully
        </Text>
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content
          maxWidth="500px"
          width={"100%"}
          marginBottom="auto"
          marginTop={10}
        >
          <Box
            marginTop={"1"}
            ml="10"
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text>My Accounts</Text>
            <Box mb="10" width="2" height="2">
              <Modal.CloseButton />
            </Box>
          </Box>
          <Box width="100%" marginTop={10}>
            <MediaForActivity onPress={() => setShowModal(false)} />
            <MediaForActivity onPress={() => setShowModal(false)} />
            <MediaForActivity onPress={() => setShowModal(false)} />
          </Box>

          <Box borderWidth={0.5} borderColor="#DFDFE0" width={"100%"}></Box>
          <Box ml="3">
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              m="2"
            >
              <Icon
                as={<SvgCreateAccount height="20" width="20" />}
                borderRadius="200"
              />
              <Text ml="2">Create Account</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              m="2"
            >
              <Icon
                as={<SvgImportAccount height="20" width="20" />}
                borderRadius="200"
              />
              <Text ml="2">Import Account</Text>
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const headerRight = () => (
  <Box
    display="flex"
    flexDirection={"row"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <HeaderDropdown />
    <Box>
      <Icon as={<SvgNotification height="20" width="20" />} ml={3} mr="2" />
    </Box>
    <Box>
      <Icon as={<SvgSettings height="20" width="20" />} ml={3} mr="2" />
    </Box>
  </Box>
);
export const headerLeft = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      mx="1"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box mx="1">
        <Icon
          as={<SvgBackButton height="20" width="20" />}
          borderRadius="200"
        />
      </Box>
      <Box mx="2">
        <Icon
          as={<SvgHomeButton height="20" width="20" />}
          borderRadius="200"
        />
      </Box>
    </Box>
  );
};
