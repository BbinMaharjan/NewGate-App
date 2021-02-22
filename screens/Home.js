import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Modal } from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AddGates from "./models/AddGates";
import Filter from "./models/Filter";
import ItemCardView from "../components/ItemCardView";
import { ITEM } from "../constant/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(ITEM);
  }, [ITEM]);

  return (
    <View style={styles.home}>
      <Header
        leftComponent={{ icon: "", color: "#fff" }}
        centerComponent={{
          text: "New Gate",
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            letterSpacing: 1,
          },
        }}
        rightComponent={{
          icon: "search",
          color: "#fff",
          size: 30,
          style: { marginRight: 10, marginTop: 5 },
          onPress: () => setIsOpenFilter(true),
        }}
      />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {items.map((item) => {
              return (
                <ItemCardView
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                  description={item.description}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.floatingActionButton}>
        <Ionicons
          name="add"
          onPress={() => setIsOpen(true)}
          color="white"
          size={40}
        />
      </View>
      <Modal visible={isOpen} statusBarTranslucent>
        <AddGates
          close={() => setIsOpen(false)}
          addItem={(item) => {
            setItems([...items, item]);
            console.log(item);
          }}
        />
      </Modal>
      <Modal visible={isOpenFilter} statusBarTranslucent>
        <Filter exit={() => setIsOpenFilter(false)} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    position: "relative",
  },
  body: {
    flex: 1,
  },
  floatingActionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
});

export default Home;
