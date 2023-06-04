import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import FlashMessage from "react-native-flash-message";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import theme from "./src/theme";
import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";

export default function App() {
  // ? fontsLoaded is a boolean that will be true when the fonts are loaded
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}

      <FlashMessage position="bottom" floating duration={1500} />
    </ThemeProvider>
  );
}
