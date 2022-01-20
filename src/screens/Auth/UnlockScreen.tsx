import { Box, Input, Text } from "native-base";
import React, { useState } from "react";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const UnlockScreen = ({ navigation, route }) => {
  const [pass, setPass] = useState("");
  const onPress = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <Box width={"100%"}>
      <Box height={"200px"} backgroundColor="#BB85FF" py="20">
        <Text
          textAlign={"center"}
          color="#FCFCFC"
          fontSize={"20px"}
          fontWeight={"bold"}
        >
          HomePage
        </Text>
        <Text color="#FCFCFC"  textAlign={"center"}>a web3 gateway to hidden experiences</Text>
      </Box>
      <Box my="8" px={18}>
        <Text
          textAlign={"center"}
          fontSize={"18px"}
          color="#33373B"
          fontWeight={"600"}
        >
          Welcome back!
        </Text>
        <Text textAlign={"center"} fontSize={"14px"} color="#6F6E73" px="5">
          Please enter the password to unlock this wallet
        </Text>
      </Box>
      <Box px="2" mx="1" mt="3">
        <Text my="3" color={"#6F6E73"} fontSize={"14px"}>
          Password
        </Text>
        <Input
          isDisabled={false}
          value={pass}
          borderColor={"#BEBEC2"}
          borderRadius={"5"}
          placeholder="Type Password"
          type={"password"}
          onChangeText={(value) => setPass(value)}
        />
      </Box>
      <Box my="6">
        <MyButtonWithIcons
          title="Unlock"
          icons={<SvgLeftsider height="14" width="14" />}
          backgroundColor={"#885FFF"}
          onPress={onPress}
          //disabled={pass === "" ? true : false}
          disabled={false}
        />
      </Box>
    </Box>
  );
};

export default UnlockScreen;
