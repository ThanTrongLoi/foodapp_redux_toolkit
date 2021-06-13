import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { selectPopularData } from './popularChildSlice'
import { FlatList } from 'react-native-gesture-handler'

const PopularChild = () => {
  const popularChild = useSelector(selectPopularData)

  const _rating = (item) => {
    let rating = []
    for (i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../../../assets/images/star2.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
        />
      )
    }
    return rating
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.name} >{item.name}</Text>
        <View style={{ flexDirection: 'row' }} >
          {_rating(item.rating)}
        </View>
        <Text
          numberOfLines={2}
          style={styles.comment}
        >"{item.comment}"</Text>
      </View>
    )
  }

  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{ height: 30 }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={popularChild}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  )
}

export default PopularChild

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'green'
  },
  name: {
    color: 'green',
    fontWeight: 'bold'
  },
  comment: {
    fontStyle: 'italic',
    marginTop: 5
  }
})