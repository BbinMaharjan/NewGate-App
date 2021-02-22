import React from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";

const Description = () => {
  return (
    <View>
      <Header
        leftComponent={{ icon: "", color: "#fff" }}
        centerComponent={{
          text: "Description",
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            letterSpacing: 1,
          },
        }}
        rightComponent={{
          icon: "close",
          color: "#fff",
          size: 30,
          style: { marginRight: 10, marginTop: 5 },
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default Description;
