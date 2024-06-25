import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const ContactScreen = ({ navigation }: any) => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  useEffect(() => {
    navigation.addListener("beforeRemove", (event: any) => {
      if (!isFormFilled) {
        event.preventDefault();
        Alert.alert("Peringatan", "Apakah anda akan meninggalkan halaman?", [
          {
            text: "Tetap Disini",
            style: "cancel",
          },
          {
            text: "Lanjutkan Pergi",
            onPress: () => navigation.dispatch(event.data.action),
          },
        ]);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nama Anda"
        style={styles.textInput}
        onChangeText={(e) => setIsFormFilled(e.length > 0)}
      />
      <TextInput
        placeholder="Pesan"
        style={styles.textInput}
        onChangeText={(e) => setIsFormFilled(e.length > 0)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ContactScreen;
