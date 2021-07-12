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
    'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/';
  const proileImage = 'fk-explorePlus-c5de64.png';

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
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      
      <Text
        style={{
          fontSize: 16,
          padding:10,
          textAlign: 'center',
          color: '#2874F0',
          fontWeight : 'bold'
        }}>
        <Icon
        size={14}
        color={'#2874F0'}
        name="md-phone-portrait"/>  9057250766
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