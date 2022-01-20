import { Box, Button, Icon, Image, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import SvgCircularImage from "../components/icons/CircularImage";
import SvgGlobe from "../components/icons/Globe";

import SvgLinkTo from "../components/icons/LinkTo";
import SvgPersons from "../components/icons/Persons";
import SvgTopArrow from "../components/icons/TopArrow";
import MediaForActivity from "../components/MediaForActivity";

const Docusign = () => {
  const [active, setActive] = useState("details");
  return (
    <ScrollView>
      <Box
        backgroundColor={"#E5D0FF"}
        width={"100%"}
        height={"70px"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top="8"
          left="2"
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Image
            source={require("../assets/images/docu-sign.png")}
            borderRadius={"10"}
          />
          <Box
            mt="10"
            mr="3"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Icon as={<SvgLinkTo height="15" width="15" />} ml={3} mr="2" />
            <Text textAlign={"right"} color="#587BE0" fontSize={"16px"}>
              Share
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="10" ml="3">
        <Text fontSize={"16px"} fontWeight={"bold"}>
          Docu sign
        </Text>
        <Text fontSize={"16px"} color="#6F6E73">
          sign smart contracts seamlessly
        </Text>
        <Text fontSize={"16px"} color="#587BE0" mt="2">
          Utilities
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        mx="1"
        mt="4"
      >
        <Button px="10" borderRadius={"10"} backgroundColor={"#414047"} mx="2">
          Open
        </Button>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          mx="2"
        >
          <Icon as={<SvgPersons height="20" width="20" />} ml={3} mr="2" />
          <Text>24,000+ users</Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="12"
        mt="6"
        p="2"
      >
        <Text
          color={"#33373B"}
          fontSize={"16px"}
          onPress={() => setActive("details")}
        >
          Details
        </Text>
        <Text
          color={"#33373B"}
          fontSize={"16px"}
          onPress={() => setActive("activity")}
        >
          Activities
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={active === "details" ? "row" : "row-reverse"}
      >
        <Box borderWidth={1} borderColor="#33373B" mx="5" width={"40%"}></Box>
      </Box>
      {active === "details" && (
        <>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mx="1"
            p="5"
          >
            <Text color={"#33373B"} fontSize={"16px"}>
              Overview
            </Text>
            <Icon as={<SvgTopArrow height="20" width="20" />} ml={1} mr="2" />
          </Box>
          <Box>
            <Text textAlign={"left"} mt="1" ml="5">
              it is easy to electronically sign, manage and distribute all your
              contracts and documents safely, securely, anywhere, anytime-
              paperlessly.
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            mt="1"
            ml="5"
          >
            <Icon as={<SvgGlobe height="20" width="20" />} ml={1} mr="2" />
            <Text color="#587BE0">https://docusignn.io</Text>
          </Box>
        </>
      )}

      {active === "activity" && (
        <>
          <Box>
            <Text textAlign={"center"} p="4" color="#6F6E73" fontSize={"13px"}>
              12 activity found
            </Text>
          </Box>
          <Box mx={2}>
            <MediaForActivity />
            <MediaForActivity />
            <MediaForActivity />
          </Box>
        </>
      )}
    </ScrollView>
  );
};

export default Docusign;
