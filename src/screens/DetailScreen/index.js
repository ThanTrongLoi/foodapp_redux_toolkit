import React from 'react'
import { Text, StyleSheet, View, ImageBackground, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const DetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../assets/images/header_detail.png')}
        style={{ flex: 1, alignItems: 'center' }}
        resizeMode={'stretch'}
      >
        <View style={styles.image_container}>
          <Image
            source={route.params.image}
            style={styles.image}
          />
        </View>
        <View style={styles.back}>
          <Ionicons
            name="ios-arrow-back"
            color='white'
            size={35}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ImageBackground>
      <ScrollView style={styles.footer}>
        <View style={styles.status}>
          <Text style={{ color: 'green' }}>AVALABLE</Text>
        </View>
        <Text style={styles.txtPrice}>{route.params.price}</Text>
        <Text numberOfLines={2} style={styles.txtName}>{route.params.name.toUpperCase()}</Text>
        <Text style={styles.txtDetail}>The template details auto text code displays the complete template details, including attribute details and metric details.</Text>
        <TouchableOpacity>
          <LinearGradient
            colors={['#009245', '#8cc631']}
            star={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.txtOrder}>ORDER NOW</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default DetailScreen

const height = Dimensions.get('screen').height;
const height_image = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image / 3,
    // backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: height_image / 2
  },
  back: {
    position: 'absolute',
    left: 0,
    marginTop: 30,
    marginLeft: 15
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: 'green'
  },
  txtPrice: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20
  },
  txtName: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 5
  },
  txtDetail: {
    color: 'gray',
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 100,
  },
  txtOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})