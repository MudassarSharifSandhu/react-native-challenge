import { Box, Icon, Text, Pressable, CheckIcon } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import SvgCircularImage from "./icons/CircularImage";
interface props {
  onPress: (title: String, dec: String) => void;
  title: String;
  dec: String;
  selected: boolean;
}
const MediaForActivity = ({ onPress, title, dec, selected }: props) => {
  console.log({ selected });
  return (
    <TouchableOpacity onPress={() => onPress(title, dec)}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        ml="2"
        px="2"
        mb="4"
      >
        <Box
          borderWidth={selected ? "1" : "0"}
          borderColor={"#33373B"}
          borderRadius={"full"}
          p="0.5"
          width={"50px"}
          height={"50px"}
          mx="1"
        >
          <Box
            width="40px"
            height={"40px"}
            borderRadius={100}
            backgroundColor={"blue.100"}
            overflow={"hidden"}
            alignSelf={"center"}
            m="auto"
          >
            <Icon
              as={<SvgCircularImage height="100%" width="100%" />}
              borderRadius="200"
            />
          </Box>
        </Box>

        <Box width={"70%"}>
          <Text
            fontWeight={"600"}
            fontSize={"15px"}
            numberOfLines={2}
            width={"100%"}
            color={"#414047"}
          >
            {title}
          </Text>
          <Text fontWeight={"500"} fontSize={"13px"} pt={2}>
            {dec}
          </Text>
        </Box>
        {selected && (
          <Box mr="5" mb="auto" mt="auto">
            <CheckIcon size="3" color="#33373B" />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default MediaForActivity;
