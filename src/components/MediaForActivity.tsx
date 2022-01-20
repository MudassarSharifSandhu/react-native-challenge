import { Box, Icon, Text } from "native-base";
import React from "react";
import SvgCircularImage from "./icons/CircularImage";

const MediaForActivity = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Icon
        borderRadius={100}
        as={<SvgCircularImage height="40" width="40" />}
        ml={10}
        mr={2}
      />

      <Box p="2">
        <Text
          fontWeight={"500"}
          fontSize={"15px"}
          numberOfLines={2}
          width={"90%"}
        >
          johndoe.near signed the contract successfully
        </Text>
        <Text fontWeight={"500"} fontSize={"13px"} pt={2}>
          2 Days ago
        </Text>
      </Box>
    </Box>
  );
};

export default MediaForActivity;
