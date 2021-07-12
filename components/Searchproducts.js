// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState }  from 'react';
import { RadioButton ,TextInput,Alert, Modal,TouchableWithoutFeedback, Body,  Modal as RNModal,
  Pressable,Title,Header,TouchableOpacity, SafeAreaView, StyleSheet,Button, View,Dimensions,ScrollView,Image, Text,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/style'; 

const DeviceWidth = Dimensions.get('window').width

const Productslist = ({navigation,route}) => {

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

   
  const ScreenContainer = ({ children }) => {
  return (
    <View style={styles.search_container}>
      { children }
    </View>
  );
}


  return (   
    <ScreenContainer>  
      
    <View style={ styles.top_searchbar}>
     <View style={ styles.top_searchbar_inner }>

      <View style={{ backgroundColor:'#fff', flexDirection:'row'}}>
        <Icon size={20}
        style={{ position:'relative', top:8,left:8, zIndex:9999}}
        color={'#242729'}
        name="search"/>
        
        <TextInput  
            autoFocus = {true}
            style={{ borderWidth:1, borderColor:'#fff', margin:0, height:40, paddingLeft:10}}
            placeholder=" Search for products,Brands and More" 
            placeholderTextColor="#242729"
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='emailAddress'
            keyboardType='email-address'/>
    </View>
    </View>
    </View>       
            
     <ScrollView>
       <View style={{ flexDirection:'row'}}>
        <Image
          source={{ uri : 'https://rukminim1.flixcart.com/www/1100/500/promos/04/05/2018/3a392fd0-0a11-4135-b24a-837ae11740ff.png?q=90' }}
                  style={{ height: 160,  width: '100%', resizeMode: 'center', marginTop:"35%" }} />
     </View>
  
     <View style={{ flex:1, width:'100%'}}>
        <Text style={{ color:'black', textAlign:'center'}}> Sorry, no results found!</Text>
    </View>

   </ScrollView>
 </ScreenContainer>
 
 );
};
 

export default Productslist;
 
