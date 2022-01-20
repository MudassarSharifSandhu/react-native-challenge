import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/Auth/LandingScreen";
import VerificationScreen from "../screens/Auth/VerificationScreen";
import CreateNEARaccount from "../screens/Auth/CreateNEARaccount";
import { Box, CheckIcon, Icon, Select } from "native-base";
import SecureAccount from "../screens/Auth/SecureAccount";
import SecureAccount2 from "../screens/Auth/SecureAccount2";
import UnlockScreen from "../screens/Auth/UnlockScreen";
import Dashboard from "../screens/Dashboard";
import Docusign from "../screens/Docusign";

import { Notification, Settings } from "../components/icons";

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  const [services, setServices] = useState("");
  const headerCom = () => (
    <Box display="flex" flexDirection={"row"} alignItems={"center"}>
      <Select
        borderRadius={20}
        selectedValue={services}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(value) => setServices(value)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>

      <Box>
        <Icon as={<Notification height="20" width="20" />} ml={3} mr="2" />
      </Box>
      <Box>
        <Icon as={<Settings height="20" width="20" />} ml={3} mr="2" />
      </Box>
    </Box>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={LandingScreen}
          name="HomeScreen"
          options={{
            title: "HomePage",
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          component={CreateNEARaccount}
          name="CreateNEARaccount"
          options={{
            title: "CreateNEARaccount",
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",

            headerLeft: () => <Box></Box>,
          }}
        />
        <Stack.Screen
          component={VerificationScreen}
          name="VerificationScreen"
          options={{
            title: "Verification",
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",
            headerLeft: () => <Box></Box>,
          }}
        />
        <Stack.Screen
          component={SecureAccount}
          name="SecureAccount"
          options={{
            title: "Secure Your Account",
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",
            headerLeft: () => <Box></Box>,
          }}
        />
        <Stack.Screen
          component={SecureAccount2}
          name="SecureAccount2"
          options={{
            title: "Secure Your Account",
            headerStyle: {
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",
            headerLeft: () => <Box></Box>,
          }}
        />
        <Stack.Screen
          component={UnlockScreen}
          name="UnlockScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{
            headerRight: headerCom,
          }}
        />

        <Stack.Screen
          component={Docusign}
          name="Docusign"
          options={{
            headerRight: headerCom,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;
