import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ModuleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ padding: 16 }}>
      <Text>Модуль {id}</Text>
    </View>
  );
}
