import { Box, Icon, Text } from "native-base";
import React from "react";
import SvgLeftSider from "./icons/LeftSider";
import SvgWeb3Apps from "./icons/Web3Apps";

const Web3App = () => {
  return (
    <Box
      backgroundColor={"#885FFF"}
      borderRadius="10"
      width={"100%"}
      height={"100%"}
    >
      <Icon as={<SvgWeb3Apps height="100%" width="100%" />} />
      <Box position={"absolute"} top="5" left="5">
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text color="#FFFFFF" fontSize={"16px"} fontWeight={"600"}>
            web3 Apps
          </Text>
          <Box ml="10">
            <Icon as={<SvgLeftSider height="14" width="14" />} />
          </Box>
        </Box>
        <Box
          backgroundColor={"#18D7A9"}
          px="2"
          py="1"
          borderRadius={"5"}
          width="80%"
        >
          <Text color="#FFFFFF">12 Connected</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Web3App;
