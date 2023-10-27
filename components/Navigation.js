import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
export default function Navigation() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Link href={"/"}>index</Link>
      </View>
      <View style={styles.item}>
        <Link href={"/home"}>home</Link>
      </View>
      <View style={styles.item}>
        <Link href={"/news"}>news</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
  },
});
