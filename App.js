import { SafeAreaView, Dimensions, View, StyleSheet } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./components/AppButton";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return <WelcomeScreen />;
}
