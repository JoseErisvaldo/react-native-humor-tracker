import {
  Inter_800ExtraBold,
  Inter_400Regular_Italic,
  Inter_400Regular,
  useFonts,
} from "@expo-google-fonts/inter";
import { AppRoutes } from "./Routes";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [loaded, error] = useFonts({
    extraBold: Inter_800ExtraBold,
    regularItalic: Inter_400Regular_Italic,
    regular: Inter_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppRoutes />;
}
