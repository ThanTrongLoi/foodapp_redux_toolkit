import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import { selectAllChild } from './allChildSlice'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AllChild = () => {
  const navigation = useNavigation()
  const allChildData = useSelector(selectAllChild)
  const [search, setSearch] = useState('')
  const _rating = (item) => {
    let rating = []
    for (i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../../../assets/images/star.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
        />
      )
    }
    return rating
  }

  const renderItem = (item) => {
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
        start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
        style={styles.item}
      >
        <View style={styles.image_container} >
          {/* {allChildData.map((todo, index) => ( */}
          <Image source={item.image} style={styles.image} />
          {/* ))} */}
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>
            {_rating(item.rating)}
          </View>
          <View style={styles.price_container}>
            <View style={styles.price}>
              <Text style={styles.txtPrice}>{item.price}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailScreen', {
            image: item.image,
            price: item.price,
            name: item.name
          })}
          style={styles.button}>

          <AntDesign
            name="arrowright"
            color='green'
            size={15}
          />
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  // const ItemSeparatorComponent = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 10
  //       }} />
  //   )
  // }


  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          placeholder="Search.."
          style={{ flex: 1, marginLeft: 10 }}
          value={search}
          onChangeText={(search) => setSearch(search)}
        />
        <TouchableOpacity
          onPress={()=>_search('')}
          style={{paddingHorizontal: 10}}
        >
          <Ionicons name='ios-close' color="gray" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.flatlist}>
        {/* <FlatList
          data={allChildData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
        /> */}
        {allChildData.filter((val)=>{
          if(search == ''){
            return val
          } else if (val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        }).map((item)=>renderItem(item))}
      </ScrollView>
    </View>
  )
}

export default AllChild

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5
  },
  flatlist: {
    flex: 1,
    marginTop: 10
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical:  5
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row'
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center'
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50
  },
  txtPrice: {
    color: 'green',
    fontWeight: 'bold'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10
  }
})