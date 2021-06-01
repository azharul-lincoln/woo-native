import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function Category({ title, imageSrc, id }) {
  return (
    <TouchableOpacity style={styles.item}>
      {imageSrc && <Image style={styles.image} source={{ uri: imageSrc }} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#555",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
  },
  categoryCard: {
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  item: {
    backgroundColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    height: Dimensions.get("window").width / 3, // approximate a square
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default Category;
