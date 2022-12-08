import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = ({first_name,email,avatar}) => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <TouchableOpacity onPress={()=>setIsOpen(!isOpen)} >
        <View style={styles.containers} >
            <Image style={styles.image} source={{uri:avatar}}/>
            <Text style={styles.text} >{first_name}</Text>
            {isOpen && <Text style={styles.text} >{email}</Text>}
        </View>
    </TouchableOpacity>
  )
}

export default Card

const styles=StyleSheet.create({
    containers:{
        height:120,
        backgroundColor:"#cecece",
        padding:10,
        justifyContent:"center",
        borderBottomWidth:1,
    },
    text:{
        alignSelf:"center",
        fontWeight:"bold",
    },
    image:{
        width:50,
        height:50,
    }
})
