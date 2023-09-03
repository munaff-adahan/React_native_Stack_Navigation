import { StyleSheet, Text, SafeAreaView } from "react-native";

export function ProfileUi({navigation,route}) {

  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Profile</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.mobile}</Text>
    </SafeAreaView>
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
