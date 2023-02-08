import { SafeAreaView, Dimensions, View } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return (
     <WelcomeScreen />
  );
}
