import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import useCatgoryStore from "../../store/categoryStore";
import CategoryItem from "./CategoryItem";

function CategoryList(props) {
  const categories = useCatgoryStore((state) => state.categories);

  return (
    <View style={styles.container}>
      {categories ? (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <CategoryItem
                id={item.id ? item.id : null}
                catName={item.name ? item.name : null}
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
    flexDirection: "row",
  },
});

export default CategoryList;
