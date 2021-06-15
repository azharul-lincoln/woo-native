import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button,
} from "react-native";

import ProductScreen from "./app/screens/ProductScreen";

export default function App() {
  return <ProductScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
