import { Box, Icon, Input, ScrollView, Text } from "native-base";
import React from "react";
import SvgCopySeed from "../../components/icons/CopySeed";
import SvgLeftsider from "../../components/icons/LeftSider";
import MyButtonWithIcons from "../../components/MyButtonWithIcons";
import SeedPhrase from "../../components/SeedPhrase";

const SecureAccount2 = ({ navigation, route }) => {
  const seedData = [
    {
      no: 1,
      name: "gather",
    },
    { no: 2, name: "engage" },
    { no: 3, name: "father" },
    { no: 4, name: "plant" },
    { no: 5, name: "indigo" },
    { no: 6, name: "dental" },
    { no: 7, name: "sick" },
    { no: 8, name: "fangus" },
    { no: 9, name: "fangus" },
    { no: 10, name: "fangus" },
    { no: 11, name: "fangus" },
    { no: 12, name: "fangus" },
  ];
  const onPress = () => {
    navigation.navigate("UnlockScreen");
  };
  return (
    <ScrollView>
      <Box>
        <Box p="4">
          <Text color="#808080" fontSize={"14px"}>
            Keep your apps safe from other with access to your computer.
          </Text>
        </Box>
        <Box p="4">
          <Text
            color="#0F2035"
            fontWeight="600"
            textAlign={"center"}
            fontSize="16px"
          >
            Seed phrase
          </Text>
        </Box>
        <Box
          borderWidth={1}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          borderColor={"#DFDFE0"}
          m={"2"}
          p={"2"}
        >
          {seedData.map((item) => {
            return <SeedPhrase no={item.no} value={item.name} key={item.no} />;
          })}
        </Box>

        <Box
          px="2"
          mx="auto"
          mt="3"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Icon borderRadius={100} as={SvgCopySeed} width="20" height="20" />
          <Text color={"#885FFF"} fontSize={"26px"} textAlign={"center"}>
            {" "}
            Copy seed
          </Text>
        </Box>
        <Box mt="6" mb="30" py="10">
          <MyButtonWithIcons
            title="Continue to Login d"
            icons={<SvgLeftsider height="14" width="14" />}
            backgroundColor={"blue.500"}
            onPress={onPress}
            disabled={false}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default SecureAccount2;
