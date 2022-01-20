import { Box, Text } from "native-base";
import React from "react";
interface props {
  value:String ;
  no:Number ;
}
const SeedPhrase = ({ value, no }: props) => {
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      p="1"
      borderWidth={1}
      width={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={10}
      m="1"
      borderColor={"#BEBEC2"}
    >
      <Box backgroundColor={"#6F6E73"} borderRadius={10}>
        <Text px="3" py="1">
          {no}
        </Text>
      </Box>
      <Text px="2" py="1">
        {value}
      </Text>
    </Box>
  );
};

export default SeedPhrase;
