
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileUi } from "./Profile1";
import { HomeUi } from "./Home";

const Stack = createNativeStackNavigator();

function app() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeUi}/>
        <Stack.Screen name="Profile" component={ProfileUi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default app;

