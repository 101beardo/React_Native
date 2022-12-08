
import { FlatList, StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
  
  return (
    <View style={styles.container} >
     <Text style={styles.text} >{title}</Text>
    </View>

    
  )
}

export default Header

const styles=StyleSheet.create({
  container:{
    height:60,
    backgroundColor:"teal",
    padding:10,
  },
  text:{
    color:"white",
    fontSize:30,
    alignSelf:"center",
  }
})
