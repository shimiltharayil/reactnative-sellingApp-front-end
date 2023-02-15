import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ha"
          subTitle="Mine"
          image={require("../assets/background.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => <ListItem title={item.title} ImageComponent={<Icon size={30} iconColor={colors.white} name={item.icon.name} backgroundColor={item.icon.backgroundColor} /> } /> }

        />
      </View>
    </Screen>
  );
};
export default AccountScreen;
const styles = StyleSheet.create({
    screen:{
     backgroundColor:colors.light
    },
  container: {
    marginVertical: 20,
  },
});
