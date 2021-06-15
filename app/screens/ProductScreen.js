import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CategoryList from "../components/category/CategoryList";
import ProductList from "../components/products/ProductList";
import Screen from "./Screen";

function ProductScreen(props) {
  return (
    <Screen style={styles.container}>
      <View>
        <Text style={styles.headline}>Our Product</Text>
      </View>

      <View style={styles.catListContainer}>
        <CategoryList />
      </View>

      <ProductList />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  catListContainer: {
    marginVertical: 10,
  },
  headline: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default ProductScreen;
