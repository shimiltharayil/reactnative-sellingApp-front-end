import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import AppPicker from './components/AppPicker';
import { useState } from "react";

const categories = [
  { label: "Furniture1", value: 1 },
  { label: "Furniture2", value: 2 },
  { label: "Furniture3", value: 3 },
];


export default function App() {
  const [category, setCategory] = useState()
  console.log(category);
  return (
  
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories}placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
