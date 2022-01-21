import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

import AppStack from "./src/navigation/AppStack";

// Define the config
const config = {
  // dependencies: {
  //   'linear-gradient': require('expo-linear-gradient').LinearGradient
  // }
}

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <AppStack />
    </NativeBaseProvider>
  );
}
