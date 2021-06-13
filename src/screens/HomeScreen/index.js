import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import ScrollableTabView , {DefaultTabBar} from 'react-native-scrollable-tab-view'
import PopularChild from './popularChild/popularChild'
import AllChild from './AllChild/allChild'
import MenuChild from './menuChild/menuChild'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/images/header.png')}
          style={styles.imagebackground}
          resizeMode='contain'
        >
          <Text style={styles.title}>HOME</Text>
        </ImageBackground>
      </View>
      <View style={styles.tabbar}>
        <ScrollableTabView 
          style={{marginTop:20}}
          tabBarActiveTextColor='green'
          initialPage={0}
          renderTabBar={()=><DefaultTabBar underlineStyle={{backgroundColor: 'green',}} />}
        >
          <AllChild tabLabel="All" props={this.props} />
          <MenuChild tabLabel="Menu" props={this.props} />
          <PopularChild tabLabel="Popular" props={this.props} />
        </ScrollableTabView>
      </View>
    </View>
  )
}

export default HomeScreen

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    position: 'absolute'
  },
  tabbar: {
    flex: 1,
    marginTop: width*0.3,
    paddingHorizontal: 30
  },
  imagebackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 25
  }
})