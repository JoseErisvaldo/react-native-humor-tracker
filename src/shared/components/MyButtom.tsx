import { View, Text, TouchableOpacity } from "react-native";

interface IFirstComponentProps {
  order: number;
  children?: React.ReactElement;
  onPress?: () => void;
}

export const FirstComponent = (props: IFirstComponentProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>{props.order}</Text>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};
