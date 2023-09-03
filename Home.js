import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";

export function HomeUi({ navigation }) {
  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Home</Text>
      <Button title="Go To Profile" onPress={goToProfile} />
    </SafeAreaView>
  );
  return ui;

  function goToProfile() {
    navigation.navigate("Profile");
  }
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
