import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/Auth/LandingScreen";
import VerificationScreen from "../screens/Auth/VerificationScreen";
import CreateNEARaccount from "../screens/Auth/CreateNEARaccount";
import { Box, Icon, Modal, Text } from "native-base";
import SecureAccount from "../screens/Auth/SecureAccount";
import SecureAccount2 from "../screens/Auth/SecureAccount2";
import UnlockScreen from "../screens/Auth/UnlockScreen";
import Dashboard from "../screens/Dashboard";
import Docusign from "../screens/Docusign";

import { HeaderLeft, HeaderRight } from "../components/header/Header";

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
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
            headerRight: () => <HeaderRight />,
            headerLeft: () => <HeaderLeft />,
            title: "",
          }}
        />

        <Stack.Screen
          component={Docusign}
          name="Docusign"
          options={{
            headerRight: () => <HeaderRight />,
            headerLeft: () => <HeaderLeft />,
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;
