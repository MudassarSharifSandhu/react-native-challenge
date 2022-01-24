import { Box, Factory, Text } from "native-base";
import React, { useEffect, useState, useRef } from "react";
import SvgLeftsider from "../../components/icons/LeftSider";
import Input from "../../components/Input";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const VerificationScreen = ({ navigation, route }) => {
  const [pass, setPass] = useState([
    { ch: "", n: 1 },
    { ch: "", n: 2 },
    { ch: "", n: 3 },
    { ch: "", n: 4 },
    { ch: "", n: 5 },
    { ch: "", n: 6 },
  ]);
  console.log({ pass });
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
          {pass &&
            pass.length > 0 &&
            pass
              .sort(function (a, b) {
                return b.n - a.n;
              })
              .map((item, index) => {
                return (
                  <Input
                    onChangeText={(value) => {
                      console.log({ ch: item.ch });
                      let oldArray = [...pass];
                      oldArray[index] = { ch: value, n: item.n };
                      setPass(oldArray);
                    }}
                    pass={item.ch}
                  />
                );
              })}
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
