import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/home";
import ProgateScreen from "./screens/progate";
import ContactScreen from "./screens/contact";
type PropsHomeScreen = {
  navigation: any;
};
type PropsProgateScreen = {
  navigation: any;
  route: any;
};
// const HomeScreen = ({ navigation }: PropsHomeScreen) => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Progate"
//         onPress={() =>
//           navigation.navigate("Progate", {
//             name: "Ninja Ken",
//             language: "React Native",
//           })
//         }
//       />
//     </View>
//   );
// };
// const ProgateScreen = ({ route, navigation }: PropsProgateScreen) => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Progate, {route.params.name}!</Text>
//       <Text style={{ marginBottom: 20 }}>
//         Ayo Belajar {route.params.language}!
//       </Text>
//       <Button title="Go to Home" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();  // kalo tab ga da initialRouteName atau nama route utama nya sedangkan stack dan drawer ada initialroutenamenya
// const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progate" component={ProgateScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
