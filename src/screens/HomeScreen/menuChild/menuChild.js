import React from 'react'
import {Text,StyleSheet,View,FlatList, ScrollView,Image, TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'
import { selectMenuChild, selectItemMenuChild } from './menuChildSlice'
import { useNavigation } from '@react-navigation/native'

const MenuChild = () => {
  const navigation = useNavigation()
  const menuChildData = useSelector(selectMenuChild)
  const renderItem_type = ({item}) => {
    return(
      <TouchableOpacity
      onPress={()=>navigation.navigate('DetailScreen', {
        image: item.image,
        price: item.price,
        name: item.name
      })}
      style={styles.item_typoe}>
        <Image 
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.name} >{item.name}</Text>
      </TouchableOpacity
      
      >
    )
  }

  const ItemSeparatorComponent_type = () => {
    return (
      <View 
        style={{width: 10}}
      />
    )
  }

  const renderItem = (item) => {
    return (
      <View style={{flex: 1,marginVertical: 10}} >
        <Text style={[styles.type,{color: item.color}]}>{item.type}</Text>
        {/* {menuChildData.map((item,key)=>renderItem_type(item))} */}
        <View style={[styles.item,{backgroundColor: item.color}]}>
          <FlatList 
            data={item.data}
            renderItem={renderItem_type}
            keyExtractor={(item,index)=>index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorComponent_type}
          />
        </View>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {menuChildData.map((item,key)=>renderItem(item))}
    </ScrollView>
  )
}

export default MenuChild

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 19,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10
  },
  item_typoe:{
    flex: 1,
    alignItems: 'center'
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white'
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 15
  }
})