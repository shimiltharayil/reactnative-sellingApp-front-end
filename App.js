import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import AppPicker from './components/AppPicker';

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
    // <AccountScreen />
    // <ListingScreen />
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
