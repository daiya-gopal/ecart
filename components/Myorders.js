// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, {useState} from 'react';
import { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  Pressable,
  SafeAreaView, 
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Card,
  Button,
  TextInput,
  FlatList,
  Dimensions,Content,ImageBackground
} from 'react-native';

 import styles from '../styles/style';
 import Carousel from 'react-native-banner-carousel';
 import Spinner from 'react-native-loading-spinner-overlay';

 const data = [
  {id: 'a', value: 'Sport Shoes', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More' , pic: 'https://rukminim1.flixcart.com/image/120/120/k0463rk0/shoe/g/e/j/787-10-tying-blue-original-imafdk8v9zunhj5u.jpeg?q=80'},
  {id: 'b', value: 'Wrist Watchs' , offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/120/120/jsc3ssw0/watch/z/f/y/1170-bl-br-fogg-original-imafdv97yfsrn9wt.jpeg?q=80'},
  {id: 'c', value: 'Womens Sarees', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/120/120/k12go7k0/sari/p/h/c/free-bd030-bollydoll-designer-original-imafgjen5kwbudbm.jpeg?q=80' },
  {id: 'd', value: 'Headphons', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/120/120/kj0bp8w0-0/headphone/l/j/0/bassheads-103-black-boat-original-imafyz3wqtqfzzwd.jpeg?q=80'},
  {id: 'e', value: 'Explore Now', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/240/240/jrf8o7k0/hand-messenger-bag/a/h/3/fashion-shoulder-bag-pg-10-shoulder-bag-urban-trend-original-imaexs9wmanzw6hh.jpeg?q=60'},
  {id: 'f', value: 'Big Saving', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/120/120/khxqt8w0-0/pendrive/type-a-to-type-c/c/g/g/sdddc2-064g-i35-sandisk-original-imafxubtqtxahat2.jpeg?q=80'},
  {id: 'g', value: 'Baby Care', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/240/242/jgy0fbk0/bath-towel/p/6/3/ultra-soft-hooded-classic-and-designer-baby-bath-towel-bath-original-imaeqx28bykqqscx.jpeg?q=60'},
  {id: 'h', value: 'Routers', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/240/240/jhjg13k0/router/g/n/n/tp-link-archer-c20-ac-wireless-dual-band-original-imaf5j9whw9bbetb.jpeg?q=60'},
  {id: 'i', value: 'Computers', offer: 'Shop summer sytles & Trands, Tokyo Talkies Sassafras, AND & More', pic: 'https://rukminim1.flixcart.com/image/120/120/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=80'},
];
  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;
 
  export default class Myorders extends Component {
     
    static navigationOptions = {
      title: 'Page 1',
      //Sets Header text of Status Bar
    };
 
      
//const HomeScreen = ({navigation}) => {

render() {

    console.disableYellowBox = true; 
    const { navigate } = this.props.navigation;  
 
  return (
 <ScrollView>
   <View>
    <FlatList  style={{ width: '100%',backgroundColor:'#fff' }}
      data={data}
      renderItem={({item}) => (
       <View style={ styles.notification_list_outer }>
          <TouchableOpacity  style={[styles.notification_list]}>

              <View style={styles.notification_img}>
                <Image  source={{ uri : item.pic }} style={styles.notification_img_inner} />
              </View>
            
             <View>
              <View style={styles.notification_cont}>
                <Text style={styles.notification_list_inner_title}>{item.value}  </Text>
                <Text style={styles.notification_list_inner_title_new}>
                   {item.offer} 
                </Text>
              </View>

            </View>
            </TouchableOpacity> 
          </View>
      )}
      keyExtractor={item => item.id} />
      </View>
    </ScrollView>

    ); 
  }

  /*return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />

          <Button
          title="Red Header"
          //Button Title
          onPress={() =>
            navigation.navigate('FirstPage', {
              paramKey: 'GOPAL DAIYA',
            })
          }
        />
 
       <Button
          title="Yellow Header"
          //Button Title
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: 'REACT NATIVE',
            })
          }
        />
 
         <Button
          title="Pink Header"
          //Button Title
          onPress={() =>
            navigation.navigate('ThirdPage', {
              paramKey: 'LARAVEL',
            })
          }
        />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer with Bottom Tab
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView> 
  );
};

export default HomeScreen;*/

}

 /*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  top_category_bar: { 
    flexDirection: 'row', 
    width: '100%', 
    backgroundColor : '#fff'
   },

  top_category_inner_block: { 
    margin: 5,marginTop: 0
  },
  
  top_category_image :{ 
    resizeMode: 'contain', 
    width: 50, 
    height: 50, 
    margin: 2, 
    marginTop: 10
  },

  top_category_text_block: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    justifyContent: 'center'
  },

  top_category_text: { 
    color: '#494949', 
    fontWeight: '200', 
    fontSize: 11 
  }
});*/