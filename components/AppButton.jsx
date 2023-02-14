import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../app/config/colors";
const AppButton = ({ title,onPress,color }) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    padding: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
