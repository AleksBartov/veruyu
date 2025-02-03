import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { Module } from "@/types";

const modules: Module[] = [
  {
    id: 1,
    title: "Верую во единаго Бога Отца...",
    description: "Учение о Боге-Творце",
    progress: 30,
  },
  {
    id: 2,
    title: "И во единаго Господа Иисуса Христа...",
    description: "Учение о Христе",
    progress: 10,
  },
  // ...остальные 10 модулей
];

export default function LearnScreen() {
  return (
    <FlatList
      data={modules}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Link href={`/module/${item.id}`} asChild>
          <View style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <View style={styles.progressBar}>
              <View
                style={{
                  width: `${item.progress}%`,
                  height: 4,
                  backgroundColor: "#2F80ED",
                }}
              />
            </View>
          </View>
        </Link>
      )}
    />
  );
}

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
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginTop: 8,
  },
} as const;
