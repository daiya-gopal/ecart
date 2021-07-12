// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet,Card, View,Dimensions,ScrollView,Image, Text,FlatList} from 'react-native';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/Ionicons';

const DeviceWidth = Dimensions.get('window').width

const Productdetail = ({navigation,route}) => {

  console.disableYellowBox = true; 
  
    navigation.setOptions({
    title: route.params.paramKey,
    headerStyle: {
        backgroundColor: '#2874F0', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
        fontWeight: 'normal', //Set Header text style
        left: -18,
        fontSize:19
    },
  });
    
  return (
  <ScrollView>
    <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
    <View style={{ backgroundColor: "#eee",  width:'100%'}}>
      <View style={{ height: 200, width: "100%" }}>
      <Image
            source={{ uri : 'https://rukminim1.flixcart.com/image/850/850/jx9aefk0/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imafhr8tgjvucefj.jpeg?q=20' }}
            style={styles.product_detail}
          />
      </View>
      <View style={{ padding: 10, width: "100%" }}>
        <Text style={styles.product_detail_title}>Canon EOS 200D II DSLR Camera EF-S 18 - 55 mm IS STM and 55 - 250 mm IS STM (Black)</Text>
        

        <View style={{flexDirection: 'row'}}>
         <View>
            <Text style={styles.product_detail_rating}>4.4
          <Icon style={styles.hedericon}
            size={10}
            color={'#fff'}
            name="md-star-sharp"/></Text>
         </View>
         
         <View style={{ flex:1}}>
            <Text style={styles.product_detail_total_rating}>2,254 ratings</Text>
         </View>
        </View> 


        <View style={{flexDirection: 'row',marginBottom:10, height:50, borderBottomWidth:1, 
        borderColor: '#dfe0e2'}}>
         <View style={{ flex:2}}>
            <Text style={styles.product_detail_amount}>Rs. 64.990 </Text>
         </View>
         
         <View style={{ flex:1}}>
            <Text style={styles.product_detail_amount_offer}>65.990</Text>
         </View>

         <View style={{ flex:1}}>
            <Text style={styles.product_detail_amount_discount}>1% off</Text>
         </View>

        </View>  

        <Text style={{ color: "#777", paddingTop: 5 }}>
        Canon EOS 200D II DSLR Camera EF-S 18 - 55 mm IS STM and 55 - 250 mm IS STM (Black)
        </Text>

      </View>
    </View>
  </View>
    </ScrollView>
  );
};
  
export default Productdetail;
 
