import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import axios from "axios";
import Category from "./app/components/Category";

import {
  BASE_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "./app/config/woocommerce/woocommerce_key";

export default function App() {
  const [proeducts, setProducts] = useState();
  const [categories, setCategories] = useState();

  const fetProducts = () => {
    const url = `${BASE_URL}products?per_page=100&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchCategories = async () => {
    const url = `${BASE_URL}products/categories?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    axios
      .get(url)
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <SafeAreaView>
      {categories ? (
        <FlatList
          style={{ marginHorizontal: 10 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={categories}
          numColumns="2"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Category
              id={item.id ? item.id : null}
              title={item.name ? item.name : null}
              imageSrc={item.image ? item.image.src : null}
            />
          )}
        />
      ) : (
        <Text>Loading....</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
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
