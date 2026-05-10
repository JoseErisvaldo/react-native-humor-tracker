import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TNavigationScreenProps } from "../Routes";

export default function Home() {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <>
      <Text style={{ fontFamily: "extraBold" }}>Oi Home</Text>
      <Button
        title="Acessar Detail"
        onPress={() => navigation.navigate("detail", { rate: 2 })}
      />
      <Button
        title="Definir nome do usuario"
        onPress={() => navigation.navigate("setUserName")}
      />
    </>
  );
}
