import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

function CategoryItem({ id, catName }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{catName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    marginHorizontal: 5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  image: {},
  title: {
    color: "#444",
    fontWeight: "700",
  },
});

export default CategoryItem;
