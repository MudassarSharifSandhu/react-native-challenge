import { Box, Input, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";

const CreateNEARaccount = ({ navigation, route }) => {
  const [nameChange, setNameChange] = useState("");
  const [accountId, setAccountId] = useState("");
  const onPress = () => {
    navigation.navigate("SecureAccount");
  };
  return (
    <ScrollView>
      <Box mt="10">
        <Box px="2" mx="1">
          <Text textAlign={"left"} color="#808080" fontSize={"14px"}>
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </Text>
        </Box>
        <Box px="2" mx="1" mt="3">
          <Text my="3">Full Name</Text>
          <Input
            borderColor={"#BEBEC2"}
            borderRadius={"5"}
            placeholder="Ex. John doe"
            onChangeText={(value) => setNameChange(value)}
          />
        </Box>
        <Box px="2" mx="1" mt="3">
          <Text my="3">Account ID</Text>
          <Input
            borderColor={"#BEBEC2"}
            borderRadius={"5"}
            placeholder="yourname"
            onChangeText={(value) => setAccountId(value)}
          />
        </Box>
        <Box my="10">
          <MyButtonWithIcons
            title="Continue"
            icons={<SvgLeftsider height="14" width="14" />}
            backgroundColor={"#885FFF"}
            onPress={onPress}
            disabled={nameChange === "" || accountId === "" ? true : false}
          />
        </Box>
        <Box px="2">
          <Text textAlign={"center"} color="#6F6E73">
            By creating a NEAR account, you agree to the NEAR
          </Text>
          <Text textAlign={"center"} color="blue.500">
            Wallet Terms of Service and Privacy Policy.
          </Text>
        </Box>
        <Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            my={5}
            mx="auto"
            borderWidth={0.5}
            width="100%"
            borderColor={"#DFDFE0"}
          ></Box>
          <Text textAlign={"center"} color="#414047" my="2">
            Already have NEAR account?
          </Text>
        </Box>

        <Box my="2">
          <MyButtonWithIcons
            title="Log in with NEAR"
            icons={<SvgLeftsider height="14" width="14" />}
            backgroundColor={"#414047"}
            onPress={() => {}}
            disabled={true}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CreateNEARaccount;
