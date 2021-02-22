import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-community/picker";
import { Button, Header, Input } from "react-native-elements";
import { CATEGORIES } from "../../constant/data";

const AddGates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const submit = (data) => {
    addItem(data);
    setIsOpen(false);
  };

  return (
    <View style={styles.addgates}>
      <Header
        centerComponent={{
          text: "Add Gates",
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
          onPress: props.close,
        }}
      />
      <View style={styles.bodyaddgates}>
        <Input
          placeholder="Title"
          label="Title"
          autoCapitalize="words"
          leftIcon={{ type: "Ionicons", name: "label" }}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <Input
          placeholder="$Price"
          label="Price"
          keyboardType="number-pad"
          leftIcon={{ type: "Ionicons", name: "money" }}
          onChangeText={(text) => setPrice(text)}
          value={price}
        />
        <Input
          placeholder="Image URL"
          label="Image"
          leftIcon={{ type: "Ionicons", name: "link" }}
          onChangeText={(text) => setImage(text)}
          value={image}
        />
        <Input
          placeholder="Description"
          label="Description"
          numberOfLines={3}
          multiline
          leftIcon={{ type: "Ionicons", name: "title" }}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
        <Text> Category</Text>
        <Picker
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          selectedValue={category}
          mode="dropdown"
          style={{ height: 50, width: "100%" }}
        >
          <Picker.Item label="Select Category" color="#aaa" value={null} />
          {CATEGORIES.map((category) => {
            return (
              <Picker.Item
                key={category.id}
                label={category.title}
                value={category.title}
              />
            );
          })}
        </Picker>
      </View>
      <Button
        title="Add Items"
        buttonStyle={{ borderRadius: 30, marginRight: 30, marginLeft: 30 }}
        onPress={(data) => {
          props.addItem({
            title,
            price,
            image,
            description,
            category,
            id: Math.random().toString(),
          });

          props.close();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addgates: {},
  bodyaddgates: {
    padding: 10,
  },
});

export default AddGates;
