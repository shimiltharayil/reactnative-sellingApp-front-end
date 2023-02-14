import { View, Text, StyleSheet, Platform } from "react-native";
const AppText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir"
    }
});
export default AppText;
