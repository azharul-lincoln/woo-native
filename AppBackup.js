import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import axios from "axios";
import Category from "./app/components/Category";

import {
  BASE_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "./app/config/woocommerce/woocommerce_key";

const produtCatJson = [
  {
    id: 15,
    name: "Albums",
    slug: "albums",
    parent: 11,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 4,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/15",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
      up: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/11",
        },
      ],
    },
  },
  {
    id: 9,
    name: "Clothing",
    slug: "clothing",
    parent: 0,
    description: "",
    display: "default",
    image: {
      id: 730,
      date_created: "2017-03-23T00:01:07",
      date_created_gmt: "2017-03-23T03:01:07",
      date_modified: "2017-03-23T00:01:07",
      date_modified_gmt: "2017-03-23T03:01:07",
      src: "https://example.com/wp-content/uploads/2017/03/T_2_front.jpg",
      name: "",
      alt: "",
    },
    menu_order: 0,
    count: 36,
    _links: {
      self: [
        {
          href: "https://example/wp-json/wc/v3/products/categories/9",
        },
      ],
      collection: [
        {
          href: "https://example/wp-json/wc/v3/products/categories",
        },
      ],
    },
  },
  {
    id: 10,
    name: "Hoodies",
    slug: "hoodies",
    parent: 9,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 6,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/10",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
      up: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/9",
        },
      ],
    },
  },
  {
    id: 11,
    name: "Music",
    slug: "music",
    parent: 0,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 7,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/11",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
    },
  },
  {
    id: 12,
    name: "Posters",
    slug: "posters",
    parent: 0,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 5,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/12",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
    },
  },
  {
    id: 13,
    name: "Singles",
    slug: "singles",
    parent: 11,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 3,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/13",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
      up: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/11",
        },
      ],
    },
  },
  {
    id: 14,
    name: "T-shirts",
    slug: "t-shirts",
    parent: 9,
    description: "",
    display: "default",
    image: [],
    menu_order: 0,
    count: 6,
    _links: {
      self: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/14",
        },
      ],
      collection: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories",
        },
      ],
      up: [
        {
          href: "https://example.com/wp-json/wc/v3/products/categories/9",
        },
      ],
    },
  },
];

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

  // const fetchCategories = async () => {
  //   const url = `${BASE_URL}products/categories?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&queryStringAuth=true`;
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setCategories(response.data);
  //       console.log(categories);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  const fetchCategories = () => {
    //const cats = JSON.parse(produtCatJson);

    console.log(produtCatJson);
    setCategories(produtCatJson);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <SafeAreaView style={styles.container}>
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
