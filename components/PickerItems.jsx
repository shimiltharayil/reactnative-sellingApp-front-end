import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'
const PickerItems = ({onPress,label}) => {
  return (
 <TouchableOpacity onPress={onPress}>
    <AppText>{label}</AppText>
 </TouchableOpacity>
  )
}
export default PickerItems
const styles = StyleSheet.create({
    text:{
        padding:20,
    }
})