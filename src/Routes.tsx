import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Home from "./screns/Home";
import Details from "./screns/Details";
import SetUserName from "./screns/SetUserName";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./shared/themes/Theme";

type TScreenDefinitions = {
  home: undefined;
  setUserName: undefined;
  detail: { rate: number };
};

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}
      >
        <Stack.Screen name="home" component={Home} />

        <Stack.Group
          screenOptions={{
            presentation: "formSheet",
            sheetCornerRadius: 24,
          }}
        >
          <Stack.Screen
            name="detail"
            component={Details}
            options={{ sheetAllowedDetents: [0.8, 0.95] }}
          />
          <Stack.Screen
            name="setUserName"
            component={SetUserName}
            options={{ sheetAllowedDetents: [0.4, 0.6] }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export type TNavigationScreenProps =
  NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<
  TScreenDefinitions,
  T
>;
