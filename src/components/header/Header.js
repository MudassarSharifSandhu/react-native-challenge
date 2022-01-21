import React, { useState } from "react";
import { Box, Icon, Modal, Text } from "native-base";
import SvgBackButton from "../icons/BackButton";
import SvgCircularImage from "../icons/CircularImage";
import SvgCreateAccount from "../icons/CreateAccount";
import SvgHomeButton from "../icons/HomeButton";
import SvgImportAccount from "../icons/ImportAccount";
import SvgNotification from "../icons/Notification";
import SvgSettings from "../icons/Settings";
import MediaForActivity from "../MediaForActivity";
import SvgDropDown from "../icons/DropDown";
import { activity } from "../../dummy-data/activitydata";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const HeaderDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState("");
  const onPress = (title, dec) => {
    setShowModal(false);

    setService(title);
  };
  return (
    <>
      <Box
        minWidth={170}
        borderRadius="100"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        borderColor={"blue.100"}
        borderWidth={"1"}
        py="2"
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
        <Icon as={<SvgDropDown height="10" width="10" />} borderRadius="200" />
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={"90%"} marginBottom="auto" marginTop={"60px"}>
          <Box
            marginTop={"1"}
            ml="5"
            mt="6"
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text color="#A0A0A1" pt="6">
              My Accounts
            </Text>
          </Box>
          <Box width="100%" marginTop={10}>
            {activity.map((item) => {
              return (
                <MediaForActivity
                  onPress={onPress}
                  title={item.title}
                  dec={item.dec}
                  selected={item.title === service ? true : false}
                />
              );
            })}
          </Box>

          <Box borderWidth={0.5} borderColor="#DFDFE0" width={"100%"}></Box>
          <Box ml="3">
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              mx="6"
              my="5"
            >
              <Icon
                as={<SvgCreateAccount height="20" width="20" />}
                borderRadius="200"
              />
              <Text ml="4" color={"#414047"}>
                Create Account
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              mx="6"
              my="5"
            >
              <Icon
                as={<SvgImportAccount height="20" width="20" />}
                borderRadius="200"
              />
              <Text ml="4">Import Account</Text>
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const HeaderRight = () => (
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
export const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      mx="1"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box mx="1">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            as={<SvgBackButton height="20" width="20" />}
            borderRadius="200"
          />
        </Pressable>
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
