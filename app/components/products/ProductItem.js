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
import { AntDesign } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-elements";
import ProductItemImage from "./ProductItemImage";

function ProductItem({ title, imageSrc, price, imageBgColor }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemHeader}>
        <View style={styles.itemHeaderLeft}>
          <Text style={styles.itemHeaderLeftText}>30%</Text>
        </View>
        <View style={styles.itemHeaderRight}>
          <AntDesign name="heart" size={12} color="#fff" />
        </View>
      </View>

      {imageSrc && (
        <ProductItemImage
          imageSrc="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11779430/2020/4/2/7460b201-74cb-4c71-9ecd-71b1b172272e1585816666577WalkstylebyELPasoMensWhiteAirSeriesKnittedMeshSportsRunningS1.jpg"
          imageBgColor={imageBgColor}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text
          style={{
            color: "#3e45aa",
            fontSize: 20,
            fontWeight: "700",
            marginTop: 0,
          }}
        >
          ${price}
        </Text>
      </View>
      <View>
        <Rating
          type="custom"
          ratingColor="#fdd446"
          ratingBackgroundColor="#f0e8c9"
          ratingCount={5}
          imageSize={14}
          style={{ paddingVertical: 15 }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  itemHeaderLeft: {
    // width: 40,
    backgroundColor: "#a1dbf5",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  itemHeaderRight: {
    backgroundColor: "#f75058",
    padding: 5,
    borderRadius: 50,
  },
  itemHeaderLeftText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  title: {
    color: "#5e6495",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    paddingVertical: 10,
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
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
    margin: 10,
    // height: Dimensions.get("window").width / 3, // approximate a square
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default ProductItem;
