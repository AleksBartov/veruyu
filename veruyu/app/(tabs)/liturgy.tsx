import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

const prayers = [
  {
    id: 1,
    title: "Символ веры",
    description: "Основы православного вероучения",
  },
  {
    id: 2,
    title: "Отче наш",
    description: "Молитва Господня",
  },
  // ...другие молитвы
];

export default function LiturgyScreen() {
  return (
    <FlatList
      data={prayers}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Link href={`/prayer/${item.id}`} asChild>
          <View style={styles.prayerCard}>
            <Text style={styles.prayerTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </Link>
      )}
    />
  );
}

const styles = {
  prayerCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  prayerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2D3436",
  },
} as const;
