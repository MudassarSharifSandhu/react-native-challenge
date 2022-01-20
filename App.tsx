import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

import AppStack from "./src/navigation/AppStack";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <AppStack />
    </NativeBaseProvider>
  );
}
