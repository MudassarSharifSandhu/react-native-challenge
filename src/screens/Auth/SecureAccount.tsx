import { Box, Input, Text } from "native-base";
import React, { useState } from "react";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const SecureAccount = ({ navigation, route }) => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const onPress = () => {
    navigation.navigate("SecureAccount2");
  };
  return (
    <Box>
      <Box p="4">
        <Text color="#808080" fontSize={"14px"}>
          Keep your apps safe from other with access to your computer.
        </Text>
      </Box>
      <Box px="2" mx="1" mt="3">
        <Text my="3" color={"#6F6E73"} fontSize={"14px"}>
          Password
        </Text>
        <Input
          borderColor={"#BEBEC2"}
          borderRadius={"5"}
          placeholder=""
          type={"password"}
          onChangeText={(value) => setPass1(value)}
        />
      </Box>
      <Box px="2" mx="1" mt="3">
        <Text my="3" color={"#6F6E73"} fontSize={"14px"}>
          Confirm Password
        </Text>
        <Input
          borderColor={"#BEBEC2"}
          borderRadius={"5"}
          placeholder=""
          type={"password"}
          onChangeText={(value) => setPass2(value)}
        />
      </Box>
      <Box m="4">
        <MyButtonWithIcons
          title="Continue"
          icons={<SvgLeftsider height="14" width="14" />}
          backgroundColor={"#885FFF"}
          onPress={onPress}
          disabled={pass1 === "" || pass2 === "" ? true : false}
        />
      </Box>
      <Box px="2" mx="1" mt="3">
        <Text my="3" color={"#000000"} fontSize={"14px"} textAlign={"center"}>
          {" "}
          claudio@metapool.app
        </Text>
      </Box>
      <Box px="1" mx="1" my="3">
        <Text color={"#6F6E73"} fontSize={"12px"} textAlign={"center"}>
          {" "}
          By creating a NEAR account, you agree to the NEAR Wallet
        </Text>
        <Text color={"blue.500"} fontSize={"12px"} textAlign={"center"}>
          {" "}
          Terms of Service and Privacy Policy.
        </Text>
      </Box>
    </Box>
  );
};

export default SecureAccount;
