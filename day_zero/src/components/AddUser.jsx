import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddUser = ({
    onSubmit
}) => {

    const[text,setText]=useState("")

    const handleSubmit=()=>{
        onSubmit(text)
        setText("")
    }

  return (
    <View style={styles.container} >
      <Text>Add user</Text>
      <TextInput onChangeText={text=>setText(text)} value={text} placeholder='Add Something'/>
      {/* setText here is called on the basis of deafult value which is text itself 
      so, onChangeText={text=>setText(text)} becomes-> onChangeText={setText} 
      */}
      <Button
        onPress={handleSubmit}
        title="Add User"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text>{text}</Text>
    </View>
  )
}

export default AddUser

const styles=StyleSheet.create({
    container:{
        padding:10,
    }
})
