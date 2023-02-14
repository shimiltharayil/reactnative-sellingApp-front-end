import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";
const messages = [
  {
    id: 1,
    title: "t1",
    description: "D1",
    image: require("../assets/favicon.png"),
  },
  {
    id: 2,
    title: "t2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
];
const MessageScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Hi", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};
export default MessageScreen;
const styles = StyleSheet.create({});
