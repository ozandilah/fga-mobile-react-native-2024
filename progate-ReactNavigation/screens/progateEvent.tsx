import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

const ProgateEventScreen = ({ navigation }: any) => {
  useEffect(() => {
    navigation.addListener("state", (event: any) =>
      console.log(event.data.state)
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Progate Event</Text>
      <Text>Join Progate Event to learn coding!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});
export default ProgateEventScreen;
