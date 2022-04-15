import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { Colors } from 'react-native-paper'
 
const view: StyleProp<TextStyle> = {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey500,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'justify',
    // paddingRight: 5,
}
const title: StyleProp<TextStyle> = {
    fontWeight: 'bold',
    paddingLeft: 10,
    width: '60%',
    justifyContent: 'flex-start',
}
const content: StyleProp<TextStyle> = {
    width: '40%',
    justifyContent: 'flex-end',
}
// const styles_: { [id: string]: StyleProp<ViewStyle> | StyleProp<TextStyle> } = {
const styles_ = {
    view,
    title,
    content,
} 
const styles = StyleSheet.create(styles_)
export default styles
