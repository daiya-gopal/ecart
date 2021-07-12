// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
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

  const data = [
    {id: 'a', value: 'Sport Shoes', offer: 'Up to 50% off' , pic: 'https://rukminim1.flixcart.com/image/120/120/k0463rk0/shoe/g/e/j/787-10-tying-blue-original-imafdk8v9zunhj5u.jpeg?q=80'},
    {id: 'b', value: 'Wrist Watchs' , offer: 'Up to 20% off', pic: 'https://rukminim1.flixcart.com/image/120/120/jsc3ssw0/watch/z/f/y/1170-bl-br-fogg-original-imafdv97yfsrn9wt.jpeg?q=80'},
    {id: 'c', value: 'Womens Sarees', offer: 'Up to 60% off', pic: 'https://rukminim1.flixcart.com/image/120/120/k12go7k0/sari/p/h/c/free-bd030-bollydoll-designer-original-imafgjen5kwbudbm.jpeg?q=80' },
    {id: 'd', value: 'Headphons', offer: 'Up to 30% off', pic: 'https://rukminim1.flixcart.com/image/120/120/kj0bp8w0-0/headphone/l/j/0/bassheads-103-black-boat-original-imafyz3wqtqfzzwd.jpeg?q=80'},
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/image/240/240/jrf8o7k0/hand-messenger-bag/a/h/3/fashion-shoulder-bag-pg-10-shoulder-bag-urban-trend-original-imaexs9wmanzw6hh.jpeg?q=60'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/image/120/120/khxqt8w0-0/pendrive/type-a-to-type-c/c/g/g/sdddc2-064g-i35-sandisk-original-imafxubtqtxahat2.jpeg?q=80'},
    {id: 'g', value: 'Baby Care', offer: 'Up to 30% off', pic: 'https://rukminim1.flixcart.com/image/240/242/jgy0fbk0/bath-towel/p/6/3/ultra-soft-hooded-classic-and-designer-baby-bath-towel-bath-original-imaeqx28bykqqscx.jpeg?q=60'},
    {id: 'h', value: 'Routers', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/image/240/240/jhjg13k0/router/g/n/n/tp-link-archer-c20-ac-wireless-dual-band-original-imaf5j9whw9bbetb.jpeg?q=60'},
    {id: 'i', value: 'Computers', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/image/120/120/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=80'},
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;
 
  export default class Registration extends Component {
    
    static navigationOptions = {
      title: 'Page 1',
      //Sets Header text of Status Bar
    };

    
//const HomeScreen = ({navigation}) => {

render() {

    console.disableYellowBox = true; 
    const { navigate } = this.props.navigation;  

    return (
      <View>
         <Text style={{ textAlign:'center', margin:140, fontSize:25}}>Profile</Text>
     </View>

    ); 
  }
}
