import Card from '@/components/card';
import data from '@/constants/data';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import { isLive } from '../../constants/api';

const index = () => {

  const renderData = () => {
    return data.map((item) =>
      <Card {...item} />
    )
  }
const server_check = async () => {
  const live = await isLive()
  console.log(live);
  
}
useEffect(() => {
  
}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.resname}>
        MASHAWE NASEEM
      </Text>

      <View style={styles.search}>
        <EvilIcons style={styles.searchIcon} name="search" size={20} color="black" />

        <TextInput style={styles.txt}
        placeholder='search...'
        />
      </View>
      <ScrollView>
        {renderData()}
      </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"

  },
  search: {
    borderWidth: 1,
    width: 350,
    height: 40.,
    fontSize: 17,
    borderRadius: 10,
    alignSelf: "center",
    margin: 30,
    backgroundColor: "white",
    borderColor: "white",
    flexDirection: "row"

  },
  menu: {
    borderWidth: 1,
    width: 400,
    height: 100,
    margin: 10,
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: "gray",
    flexDirection: "row",
  },
  imageMenu: {
    borderWidth: 1,
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "darkgray",
    borderColor: "darkgray",

  },
  nameMenu: {
    alignContent: "center",
    fontSize: 30,
    color: "white",
  },
  txt: {
    margin: 10,
    fontSize: 15,
    color: "grey",

  },
  searchIcon: {
    alignContent: "center",
    color: "#4E4C5A",


  },
  image: {
    width: 90,
    height: 90,
    borderWidth: 3,
    borderColor: "#b2b2b2bb"
  },
  resname: {
    alignSelf: "center",
    fontSize:30,
    color:"#fffdfdff",
    borderWidth:2,
borderColor:"#444444ff",
backgroundColor:"#5a5959ff",
margin:5,
borderRadius:5

  }

})













