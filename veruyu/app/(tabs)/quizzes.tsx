import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { Quiz } from "@/types";

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Символ веры: базовый тест",
    type: "text",
    questionsCount: 10,
    completed: false,
  },
  {
    id: 2,
    title: "Литургия: песнопения",
    type: "audio",
    questionsCount: 5,
    completed: true,
  },
  // ...другие тесты
];

export default function QuizzesScreen() {
  return (
    <FlatList
      data={quizzes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Link href={`/quiz/${item.id}`} asChild>
          <View style={styles.quizCard}>
            <Text style={styles.quizTitle}>{item.title}</Text>
            <Text>{item.type === "text" ? "Текстовый тест" : "Аудиотест"}</Text>
            <Text>{item.completed ? "✅ Пройден" : "❌ Не пройден"}</Text>
          </View>
        </Link>
      )}
    />
  );
}

const styles = {
  quizCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2D3436",
  },
} as const;
