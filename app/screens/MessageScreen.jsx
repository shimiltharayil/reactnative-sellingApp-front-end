import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";
const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  console.log(setMessages);
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "D2",
              image: require("../assets/chair.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
export default MessageScreen;
const styles = StyleSheet.create({});
