import { View, Text, StyleSheet } from "react-native";

const DUMMY_DATA = [
  {
    id: 1,
    title: "First News",
    author: "Mario Rossi",
  },
  {
    id: 2,
    title: "Test News",
    author: "Luigi Verdi",
  },
  {
    id: 3,
    title: "Second Test News",
    author: "Luigi Verdi",
  },
  {
    id: 4,
    title: "Test 4",
    author: "Mario Rossi",
  },
  {
    id: 5,
    title: "Test 5",
    author: "Luigi Verdi",
  },
  {
    id: 6,
    title: "Test 6",
    author: "Luigi Verdi",
  },
];

export default function news() {
  return (
    <View style={styles.container}>
      {DUMMY_DATA.map((data) => (
        <View style={styles.content} key={styles.title}>
          <Text>{data.title}</Text>
          <Text>{data.author}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  content: {
    backgroundColor: "#6E8898",
    padding: 8,
    flexBasis: "30%"
  },
});
