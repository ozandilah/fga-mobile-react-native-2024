import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
type PropsHomeScreen = {
  navigation: any;
};
const HomeScreen = ({ navigation }: PropsHomeScreen) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Progate"
        onPress={() =>
          navigation.navigate("Progate", {
            name: "Ninja Ken",
            language: "React Native",
          })
        }
      />
      <Text style={styles.marginVertical20}>atau</Text>
      <Button
        title="Hubungi Kami"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginVertical20: {
    marginVertical: 20,
  },
});

export default HomeScreen;
