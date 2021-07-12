// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {TouchableOpacity, SafeAreaView,ImageBackground, StyleSheet, View,Dimensions,ScrollView,Image, Text,FlatList} from 'react-native';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/Ionicons';
const DeviceWidth = Dimensions.get('window').width

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
const numColumns = 1;
const size = Dimensions.get('window').width/numColumns;

const Mynotifications = ({navigation,route}) => {

  console.disableYellowBox = true; 

  navigation.setOptions({
    title: 'Notifications',
    headerStyle: {
        backgroundColor: '#2874F0', //Set Header color
    },
    headerBackImage: () => <Icon name="chevron-back-sharp" color={'#fff'} size={25} /> ,
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
        fontWeight: 'normal', //Set Header text style
        left: -18,
        fontSize:19
    },
  });
    
  return (
  <ScrollView>
   <View>
    <FlatList  style={{ width: '100%',backgroundColor:'#fff' }}
      data={data}
      renderItem={({item}) => (
       <View style={ styles.notification_list_outer }>
          <TouchableOpacity  style={[styles.notification_list]}>

              <View style={styles.notification_img}>
                <Image  source={{ uri : "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png" }} style={styles.notification_img_inner} />
              </View>
            
             <View>
              <View style={styles.notification_cont}>
                <Text style={styles.notification_list_inner_title}>{item.value}  </Text>
                <Text style={styles.notification_list_inner_title_new}>
                   {item.offer} 
                </Text>
              </View>

              <View style={{ alignItems:'flex-end', width:'75%'}}>
                  <Text style={{ flexDirection:'row', fontSize:12,}}>2 days ago</Text></View>
            </View>
            </TouchableOpacity> 
          </View>
      )}
      keyExtractor={item => item.id} />
      </View>
    </ScrollView>
  );
};

export default Mynotifications;
 