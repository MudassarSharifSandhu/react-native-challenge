import { Box, Icon, Text, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";

interface IProps {
  backgroundColor: string;
  title: string;
  onPress: () => void;
  icons: any;
  disabled: boolean;
}

const MyButtonWithIcons = (props: IProps) => {
  return (
    <Pressable
      display="flex"
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      alignSelf={"center"}
      borderRadius={"10"}
      backgroundColor={props.disabled ? "gray.300" : props.backgroundColor}
      _pressed={{ background: "blue.200" }}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text
        fontWeight="bold"
        backgroundColor={props.backgroundColor}
        borderRadius={"10"}
        color="white"
        py="3"
        px="5"
      >
        {props.title}
      </Text>
      <Box pr="2">
        <Icon borderRadius={100} as={props.icons} />
      </Box>
    </Pressable>
  );
};

export default MyButtonWithIcons;
