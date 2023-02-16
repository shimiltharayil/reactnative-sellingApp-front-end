import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import colors from "../config/colors";
import Card from "./../../components/Card";
const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket",
    price: 200,
    image: require("../assets/background.jpg"),
  },
];
const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};
export default ListingScreen;
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
});
