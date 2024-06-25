import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProgateServiceScreen from "./progateService";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import ProgateEventScreen from "./progateEvent";

type PropsProgateScreen = {
  route: any;
  navigation: any;
};
const ProgateScreen = ({ route, navigation }: PropsProgateScreen) => {
  //   return (
  //     <View>
  //       <Text>Welcome to Progate, {route.params.name}!</Text>
  //       <Text style={{ marginBottom: 20 }}>
  //         Ayo Belajar {route.params.language}!
  //       </Text>
  //       <Button title="Go to Home" onPress={() => navigation.goBack()} />
  //     </View>
  //   );
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateServiceScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEventScreen}
        options={{
          tabBarLabel: "Progate",
          tabBarIcon: () => (
            <AntDesign name="customerservice" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProgateScreen;
