import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { Module } from "../types";

const modules: Module[] = [
  {
    id: 1,
    title: "Верую во единаго Бога Отца...",
    description: "Учение о Боге-Творце",
    progress: 30,
  },
  // ...остальные 11 модулей
];

const styles = {
    moduleCard: {
      backgroundColor: "white",
      padding: 16,
      borderRadius: 8,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    moduleTitle: {
      fontSize: 18,
      fontWeight: "500",
      color: "#2D3436",
    },
  } as const;
  

export default function LearnScreen() {
  return (
    <FlatList
      data={modules}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Link href={{ pathname: /module/${item.id}, params: { title: item.title } }} asChild>
          <View style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </Link>
      )}
    />
  );
}

