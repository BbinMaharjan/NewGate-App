import React from "react";
import { Header } from "react-native-elements";
const Filter = (props) => {
  return (
    <Header
      centerComponent={{
        text: "Search Gates",
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
        onPress: props.exit,
      }}
    />
  );
};

export default Filter;
