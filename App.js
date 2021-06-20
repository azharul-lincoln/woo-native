import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Button,
} from "react-native";
import { useProducts } from "./app/store/products";
import ProductScreen from "./app/screens/ProductScreen";

export default function App() {
  const { fetch, products } = useProducts();
  useEffect(() => {
    fetch();
  }, []);
  if (products) {
    return <ProductScreen />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
