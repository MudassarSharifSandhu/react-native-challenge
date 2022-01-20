import { Box, Input, Text } from "native-base";
import React, { useState } from "react";
import HeaderForSignUp from "../../components/HeaderForSignUp";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const VerificationScreen = ({ navigation, route }) => {
  const [pass, setPass] = useState({
    ch1: "",
    ch2: "",
    ch3: "",
    ch4: "",
    ch5: "",
    ch6: "",
  });

  const onPress = () => {
    navigation.navigate("CreateNEARaccount");
  };
  return (
    <Box>
      <Box>
        <Text textAlign={"center"} px={10} mt="4">
          We've sent a 6-digit verification code to the email address
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"14px"}
          color={"blue.500"}
          mt="1"
          px={10}
        >
          johndoe@gmail.com
        </Text>
        <Text
          textAlign={"center"}
          mt="25"
          fontSize={"14px"}
          color={"#808080"}
          px={10}
        >
          Enter verification code
        </Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={4}
          my={5}
        >
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch1: value })}
          />
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch2: value })}
          />
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch3: value })}
          />
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch4: value })}
          />
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch5: value })}
          />
          <Input
            borderColor={"#885FFF"}
            type={"text"}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => setPass({ ...pass, ch6: value })}
          />
        </Box>
        <Box>
          <MyButtonWithIcons
            title="Continue"
            icons={<SvgLeftsider height="14" width="14" />}
            backgroundColor={"#885FFF"}
            onPress={onPress}
            disabled={false}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={1}
          my={5}
          mx="auto"
          borderWidth={0.5}
          width="90%"
        ></Box>
        <Box>
          <Text textAlign={"center"}>Didn't receive your code?</Text>
          <Text textAlign={"center"} color={"#587BE0"} mt="10">
            Send to a different email address
          </Text>
          <Text textAlign={"center"} color={"#587BE0"} mt="10">
            Resend your code{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationScreen;
