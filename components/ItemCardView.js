import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ItemCardView = (props) => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.title}</Text>
        <Text
          numberOfLines={3}
          textBreakStrategy="balanced"
          ellipsizeMode="tail"
          style={{ color: "gray", fontSize: 12 }}
        >
          {props.description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            flex: 1,
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>Category:</Text>
          <Text style={{ fontSize: 14, color: "blue", marginLeft: 10 }}>
            {props.category}
          </Text>
        </View>
      </View>
      <View style={styles.menuright}>
        <View style={styles.iconContainer}>
          <Ionicons name="eye" size={30} color="white" />
        </View>
        <View>
          <Text>Price</Text>
          <Text style={{ color: "gray" }}>${props.price}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: 150,
    padding: 10,
    margin: 5,
    justifyContent: "flex-start",
    position: "relative",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#f5f6f7",
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: 100,
    height: 125,
    borderRadius: 10,
    resizeMode: "cover",
  },
  body: {
    flex: 5,
    padding: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuright: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});

export default ItemCardView;
