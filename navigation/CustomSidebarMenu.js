// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://blgindia.com/blghr/images/';
  const proileImage = 'chrome-capture.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor:'#2874F0' }}>
        <Image
            source={{uri: BASE_PATH + proileImage}}
            style={styles.sideMenuProfileIcon} />
        <View style={{ alignItems : 'center',justifyContent:'center', backgroundColor:'#4286f4' }}> 
         <Text style={{ color:'#fff', padding:6, fontWeight:'bold' }}> +91 9057250766</Text> 
      </View>
      </View> 

       <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="md-person-outline" color={color} size={16} /> 
          )}
          label="Login"
          onPress={() => Linking.openURL('#')}
        />

        <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="ios-cart-outline" color={color} size={16} /> 
          )}
          label="My Orders"
          onPress={() => Linking.openURL('#')}
        />

        <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="md-pricetags-outline" color={color} size={16} /> 
          )}
            label="My Coupon"
            onPress={() => Linking.openURL('#')}
            />

        <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="heart-outline" color={color} size={16} /> 
          )}
          label="My Wishlist"
          onPress={() => Linking.openURL('#')}
        />

        <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="lock-closed-outline" color={color} size={16} /> 
          )}
          label="My Account"
          onPress={() => Linking.openURL('#')}
        />


       <DrawerItem style={{ alignContent:'flex-start',  borderBottomWidth :1, borderColor:'#ccc' }}
          icon={({ color, size }) => (
            <Icon name="notifications-outline" color={color} size={16} /> 
          )}
          label="Notification"
          onPress={() => Linking.openURL('#')}
        />

         <DrawerItem
            label=""
            onPress={() => Linking.openURL('#')}
            />

      </DrawerContentScrollView>

        <Text
          style={{
            fontSize: 16,
            padding:10,
            textAlign: 'center',
            color: '#ccc',
          }}>
           version 1.0
        </Text>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 60,
    alignSelf: 'center',
  },

  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;