import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import CategoryList from "../category/CategoryList";

import Products from "./Data";
import ProductItem from "./ProductItem";

const randomBgColor = () => {
  const imageBgColors = ["#fbddcc", "#c7e4f3", "#f4eeb8", "#d0e8cf"];
  const random = Math.floor(Math.random() * imageBgColors.length);
  return imageBgColors[random];
};

function ProductList() {
  const [products, setProducts] = useState();

  const fetchProducts = () => {
    setProducts(Products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products ? (
        <FlatList
          style={{ marginHorizontal: 0 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={products}
          numColumns="2"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <ProductItem
                id={item.id ? item.id : null}
                title={item.name ? item.name : null}
                imageBgColor={randomBgColor()}
                imageSrc={item.images[0] ? item.images[0].src : null}
                price={item.price}
              />
            );
          }}
        />
      ) : (
        <Text>Loading....</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f7f7f7",
    // paddingHorizontal: 10,
  },
});

export default ProductList;
