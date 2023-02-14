import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors"

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon:{
      width:50,  
      height:50,
      backgroundColor:colors.primary,
      position:"absolute",
      left:30,
      top:40,
      
    },
  container: {
    backgroundColor:colors.black,
    flex: 1,
  },
  deleteIcon:{
      width:50,  
      height:50,
      backgroundColor:colors.secondary,
      position:"absolute",
      right:30,
      top:40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
