import React from "react";
import { StyleSheet, View, Image } from "react-native";

function ProductItemImage({ imageSrc, imageBgColor }) {
  return (
    <View
      style={{
        backgroundColor: imageBgColor,
        padding: 7,
        borderRadius: 100,
      }}
    >
      <View
        style={{
          backgroundColor: imageBgColor,
          padding: 15,
          borderRadius: 100,
          borderColor: "#fff",
          borderWidth: 2,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: imageSrc,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default ProductItemImage;
