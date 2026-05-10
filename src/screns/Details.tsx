import { View, Text, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TRouteProps } from "../Routes";

export default function Details() {
  const { params } = useRoute<TRouteProps<"detail">>();

  return (
    <View>
      <Text>Oi Details {params.rate}</Text>
    </View>
  );
}
