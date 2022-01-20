import { Box, Image, Text, View } from "native-base";
import React from "react";

const HomeImage = require("../assets/images/HomePage.png");
const RectangleImage = require("../assets/images/RectangleImage.png");
interface props {
  title: String;
}
const HeaderForSignUp = ({ title }: props) => {
  return (
    <Box
      backgroundColor={"#F5F5F5"}
      width={"100%"}
      height={"50px"}
      mt="10"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"row"}
    >
      {/* <Image source={RectangleImage} alt="rectImage" /> */}
      <View padding={"2"}>
        {/* <Image source={HomeImage} alt="hImage" /> */}
        <Text fontSize={'16px'} fontWeight={'bold'}>{title} </Text>
      </View>
    </Box>
  );
};

export default HeaderForSignUp;
