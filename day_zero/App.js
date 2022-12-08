import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import Header from './src/components/Header';
import Card from './src/components/Card';
import axios from "axios"
import AddUser from './src/components/AddUser';


export default function App() {
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([
    { id:1,
      name:"Aurora",
      email:"aurora101@gmail.com"
    },
    { id:2,
      name:"Aurora-Beta",
      email:"aurora_beta101@gmail.com"
    }
  ])

  const fetchUsers=()=>{
    setLoading(true)
    return axios.get("https://reqres.in/api/users")
    .then(res=>{
      console.log(res.data.data)
      setData(res.data.data)
      setLoading(false)
    })
    .catch(err=>{
      console.log("Error",err)
      setLoading(false)
    })
    
  }

  useEffect(()=>{
    fetchUsers()
  },[])
 
  const handleAdd=(text)=>{
    //POST request here
    const payload={
      id:1717,
      first_name:text,
      email:`${text}@gmail.com`,
      last_name:text
    }
    setData([...data,
    payload])
  }

  return (

    <ScrollView style={styles.container} >
      
      <Header title="heyman"/>
      <View>
        <Text>{loading && "loading..."}</Text>
        <AddUser onSubmit={handleAdd}/>
      <FlatList data={data} 
                keyExtractor={item => item.id}
                renderItem={({item})=>
                  <Card {...item} />
                }
                />
      </View>
    </ScrollView>
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
  }
})