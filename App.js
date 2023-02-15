import { SafeAreaView, Dimensions, View, StyleSheet } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";

export default function App() {
  return (
    //  <ListingDetailsScreen />
    // <ViewImageScreen />
    // <MessageScreen />
    // <Screen>
    //   <ListItem
    //     title="Hi"
    //     subTitle="bye"
    //     ImageComponent={
    //       <Icon
    //         name="email"
    //         size={50}
    //         backgroundColor="red"
    //         iconColor="#ffff"
    //       />
    //     }
    //   />
    // </Screen>
    <AccountScreen />
  );
}
