import { View, StyleSheet, Text } from "react-native";

export function ProfileUi() {
  const ui = (
    <View style={styles.container}>
      <Text style={styles.text1}>Profile</Text>
    </View>
  );
  return ui;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    
  },
});
