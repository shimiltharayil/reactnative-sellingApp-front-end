import { StyleSheet } from "react-native";
import colors from "../app/config/colors";

import { View, Text, Image } from "react-native";
import AppText from "./AppText";
export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    overflow:"hidden"
  },
  details: {},
  title: {
    marginBottom: 7,
  },
  subTitle: {},
});
