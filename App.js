import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProductList from "./app/components/products/ProductList";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ProductList />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  flatList: {
    flex: 1,
    marginVertical: 20,
  },
  catgoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
