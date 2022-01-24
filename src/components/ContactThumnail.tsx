import { Box, Icon, Text } from "native-base";
import React from "react";
import SvgChevronRight from "./icons/ChevronRight";
import SvgCircularImage from "./icons/CircularImage";

const ContactThumnail = () => {
  return (
    <Box
      mx="1"
      my="5"
      backgroundColor="#F5F5F5"
      shadow={"4"}
      py="4"
      borderRadius={"10"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt="1"
        ml="4"
        pr="5"
        height={"40px"}
      >
        <Text fontSize={"16px"} color="#414047">
          Contact
        </Text>
        <Icon as={<SvgChevronRight height="15" width="15" />} />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"row-reverse"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        overflow={"hidden"}
        mt="5"
        ml="3"
        pr="5"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <ImagesList key={item} />
        ))}
      </Box>
    </Box>
  );
};

const ImagesList = () => (
  <Box
    width="40px"
    height={"40px"}
    borderRadius={100}
    backgroundColor={"blue.100"}
    overflow={"hidden"}
    m="auto"
  >
    <Icon
      as={<SvgCircularImage height="100%" width="100%" />}
      borderRadius="200"
    />
  </Box>
);
export default ContactThumnail;
