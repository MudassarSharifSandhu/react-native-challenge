import { Box, Icon, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import ContactThumnail from "../components/ContactThumnail";
import ExperienceItem2 from "../components/ExperienceItem2";
import { Flower, MarketPlaes } from "../components/icons";
import SvgLeftSider from "../components/icons/LeftSider";

import MyButtonWithIcons from "../components/MyButtonWithIcons";
import TranscationItem from "../components/TranscationItem";
import Web3App from "../components/Web3App";
import { activity3 } from "../dummy-data/activitydata";

const CreateNFT = ({ navigation, route }) => {
  const [active, setActive] = useState("Collectibles");
  const [activeTab, setActiveTab] = useState("All");
  const activeStyle = {
    borderRadius: "100",
    borderWidth: 1,
    borderColor: "#BEBEC2",
    height: 10,
    // width: 20,
  };
  const onPress = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <ScrollView backgroundColor={"#FFFFFF"}>
      <Box
        backgroundColor={"#FFFFFF"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"140px"}
          mx="2"
          my="2"
        >
          <Box width={"50%"}>
            <ContactThumnail />
          </Box>
          <Box width={"50%"} height={"100%"}>
            <Web3App />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          width="100%"
          height={"30%"}
          backgroundColor={"#F7E9FF"}
          shadow={"1"}
        >
          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box p="5">
              <Text fontSize={"21px"} fontWeight={"600"} mx={4}>
                Start Creating your NFT Today
              </Text>
              <Box mr="1" mt="5">
                <MyButtonWithIcons
                  title="Create NFT"
                  icons={<SvgLeftSider height="14" width="14" />}
                  backgroundColor={"#885FFF"}
                  onPress={onPress}
                  disabled={false}
                />
              </Box>
            </Box>
          </Box>
          <Box width={"50%"} m="1" height={"100%"}>
            <Icon
              as={<Flower height="100%" width="100%" />}
              borderRadius="200"
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt="6"
          py="2"
          px="4"
          width={"100%"}
        >
          <Text
            color={"#33373B"}
            fontSize={"16px"}
            ml="7"
            onPress={() => setActive("Collectibles")}
          >
            Collectibles
          </Text>
          <Text
            color={"#33373B"}
            fontSize={"16px"}
            mr="7"
            onPress={() => setActive("Transactions")}
          >
            Transactions
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={active === "Collectibles" ? "row" : "row-reverse"}
          width={"100%"}
        >
          <Box borderWidth={1} borderColor="#33373B" width={"35%"} mx="5"></Box>
        </Box>
        <Box>
          {active === "Collectibles" && (
            <>
              <Box
                width="100%"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                ml="2"
                mr="2"
              >
                {activity3.map((item, index) => {
                  return (
                    <ExperienceItem2
                      key={index}
                      image={require("../assets/images/placeholder-image.png")}
                      title={item.title}
                      description={item.dec}
                      users="200"
                      onPress={() => navigation.navigate("Docusign")}
                    />
                  );
                })}
              </Box>
            </>
          )}
          {active === "Transactions" && (
            <>
              <Box
                width={"100%"}
                height={"50px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"row"}
                mt={"5"}
              >
                {["All", "Sent", "Received"].map((item) => {
                  return (
                    <Box
                      key={item}
                      {...{
                        ...activeStyle,
                        borderWidth: activeTab === item ? 1 : 0,
                      }}
                    >
                      <Text
                        px="3"
                        py="2"
                        color={"#6F6E73"}
                        backgroundColor={"blue.100"}
                        onPress={() => setActiveTab(item)}
                      >
                        {item}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
              <Box>
                {["Sent", "Sent", "Received"].map((item, index) => {
                  let image, type;
                  if (item.toLowerCase() === "sent") {
                    image = require("../assets/images/transaction-sent.png");
                    type = "sent to";
                  } else {
                    image = require("../assets/images/transaction-received.png");
                    type = "received from";
                  }
                  return (
                    <TranscationItem
                      key={index}
                      image={image}
                      title="0.456NEAR"
                      type={type}
                      secondPerson="devon.near"
                      onPress={() => {}}
                    />
                  );
                })}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CreateNFT;
