import { StyleSheet, Text, View } from "react-native";
export default function index() {
  return (
    <View style={styles.content}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
        finibus magna. In sed ante ac augue dignissim condimentum. Cras volutpat
        bibendum hendrerit. Aliquam at condimentum quam. Vestibulum dictum mi
        odio, nec suscipit magna molestie eget. Fusce venenatis purus quis
        tortor tempus accumsan. Vestibulum rhoncus blandit maximus. Nullam
        mollis et est in lacinia. Nunc auctor sed dolor nec commodo. Integer
        tempus lectus eu fringilla rutrum. Suspendisse ac maximus enim. Nulla
        ultricies nec ante sit amet sollicitudin. Ut molestie leo vel cursus
        feugiat. Fusce quis enim et velit cursus malesuada. Aenean lacinia
        gravida justo id feugiat. Cras vel arcu ut magna sodales aliquam.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 50,
    backgroundColor: "#FE5E41",
  },
});
