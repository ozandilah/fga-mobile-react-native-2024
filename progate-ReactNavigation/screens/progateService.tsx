import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const ProgateServiceScreen = ({ navigation }: any) => {
  //   useEffect(() => {
  //     navigation.addListener("focus", () =>
  //       alert("Progate Service Screen is Focussed.")
  //     );
  //     navigation.addListener("blur", () =>
  //       alert("Progate Service Screen is Unfoccussed")
  //     );
  //   }, []);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>
        Welcome to Progate!
      </Text>
      <Text>Progate is an online platform where you can learn coding.</Text>
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
export default ProgateServiceScreen;
