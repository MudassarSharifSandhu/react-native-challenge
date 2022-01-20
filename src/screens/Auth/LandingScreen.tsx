import { Box, Text, Input } from "native-base";
import React, { useState } from "react";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const HomeScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState("email");
  const [inputText, setInputText] = useState("");
  const activeStyle = {
    borderRadius: "100",
    borderWidth: 1,
    borderColor: "#BEBEC2",
    height: 10,
    // width: 20,
  };
  const onPress = () => {
    navigation.navigate("VerificationScreen");
  };
  return (
    <Box>
      <Box
        width={"100%"}
        height={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        mt={"5"}
      >
        <Box
          {...{ ...activeStyle, borderWidth: activeTab === "email" ? 1 : 0 }}
        >
          <Text
            px="3"
            py="2"
            color={"#6F6E73"}
            onPress={() => setActiveTab("email")}
          >
            Email
          </Text>
        </Box>
        <Box
          {...{ ...activeStyle, borderWidth: activeTab === "phone" ? 1 : 0 }}
        >
          <Text
            px="5"
            py="2"
            color={"#6F6E73"}
            onPress={() => setActiveTab("phone")}
          >
            Phone
          </Text>
        </Box>
      </Box>
      <Box>
        <Input
          value={inputText}
          borderRadius={"10"}
          borderColor="#BEBEC2"
          textAlign={"left"}
          color="#828282"
          pl="5"
          fontSize={"18px"}
          placeholder={
            activeTab === "email" ? "johndoe@gmail.com" : "Ex (337) 378 8383"
          }
          py="4"
          m="5"
          onChangeText={(value) => setInputText(value)}
        />
      </Box>
      <Box>
        <MyButtonWithIcons
          title="Continue"
          icons={<SvgLeftsider height="14" width="14" />}
          backgroundColor={"#885FFF"}
          onPress={onPress}
          disabled={inputText === "" ? true : false}
        />
      </Box>

      <Box my="10" mx="3">
        <Text textAlign={"center"}>
          by clicking continue you must agree to near labs{" "}
          <Text color="#828282">Terms & Conditions</Text> ans{" "}
          <Text color="#828282"> Privacy Policy</Text>
        </Text>
      </Box>
      <Box borderWidth={0.5} borderColor="#DFDFE0" mx="10"></Box>
      <Box my="5" mx="auto">
        <Text color={"#414047"} fontWeight={"500"}>
          Already have NEAR account?
        </Text>
      </Box>

      <MyButtonWithIcons
        title="Log in with NEAR"
        icons={<SvgLeftsider height="14" width="14" />}
        backgroundColor={"#414047"}
      />
    </Box>
  );
};

export default HomeScreen;
