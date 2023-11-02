import { View, Text, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View>
      <View style={[styles.content, styles.primaryColor]}>
        <Text style={styles.textWhite}>Content 1</Text>
      </View>
      <View style={[styles.content, styles.secondaryColor]}>
        <Text style={styles.textWhite}>Content 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    marginBottom: 10,
  },
  primaryColor: {
    backgroundColor: "#3D348B",
  },
  secondaryColor: {
    backgroundColor: "#F78764",
  },
  textWhite: {
    color: "#fff",
  },
});
