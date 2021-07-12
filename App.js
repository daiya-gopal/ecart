//https://codepen.io/bashirpour/pen/rgGgPZ//
//import * as React from 'react';
import React, {useState, useEffect} from 'react';

import {Text, Button, StyleSheet ,View,Animated, FlatList,SafeAreaView, TouchableOpacity, Image,Linking} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerItem,createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

import Productslist from './components/Productslist';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Profile from './components/Profile';
import Myorders from './components/Myorders';
import Mycarts from './components/Mycarts';
import Productdetail from './components/Productdetail';
import Mynotifications from './components/Mynotifications';
import Splashscreennew from './components/Splashscreennew';
import Login from './components/Login';
import Searchproducts from './components/Searchproducts';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import CustomSidebarMenu from './navigation/CustomSidebarMenu';
import styles from '../styles/style';
  
const Stack  = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab    = createBottomTabNavigator();

const SetHeaderRight = ({props}) => {

  const navigation = useNavigation();
  
  return (

   <View style={{flex:1, flexDirection:'row', width:75}}> 
      <TouchableOpacity onPress={() =>
         navigation.push('Mynotifications', {
         someParam: 'Some Param from previous Screen',
       })}>

      <View style={styles.count_cart}>
        <Text style={styles.count_cart_total}>4</Text>
      </View>          
      
      <Icon
        style={styles.hedericon}
        size={20}
        color={'#fff'}
        name="md-notifications-sharp"/>
    </TouchableOpacity>

     <TouchableOpacity
       onPress={() =>
        navigation.push('Mycarts', {
          someParam: 'Some Param from previous Screen',
        })}>

      <View style={styles.count_cart}><Text style={styles.count_cart_total}>8</Text></View>          
      <Icon
        style={styles.hedericon}
        size={20}
        color={'#fff'}
        name="md-cart"/>
     </TouchableOpacity>
   </View> 
  );
 };


 const SetHeaderRightnew = ({props}) => {

  const navigation = useNavigation();
  
  return (

   <View style={{flex:1, flexDirection:'row', width:75}}> 
      
     <TouchableOpacity
      onPress={() =>
        navigation.push('Mycarts', {
          someParam: 'Some Param from previous Screen',
        })} >

      <View style={styles.count_cart_new}><Text style={styles.count_cart_total}>8</Text></View>
     <Icon
        style={styles.hedericon}
        style={{alignSelf: 'flex-end',right: -35, top:18}}
        size={20}
        color={'#fff'}
        name="md-cart"/>

     </TouchableOpacity>
   </View> 
  );
 };

 // LEFT SIDE DRAWER START 

 const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {  
    //Props to open/close the drawer
     props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flex:1, flexDirection:'row', width:150}}>
      <TouchableOpacity onPress={() => toggleDrawer()} style={{flex:1, flexDirection:'row', width:50}}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5, marginTop:15}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDrawer()} style={{flex:1, flexDirection:'row', width:100}}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://blgindia.com/blghr/images/chrome-capture.png',
          }}
          style={{width: 90, height: 28, marginLeft: -30, marginTop:18}} />

      </TouchableOpacity>
    </View>
  );
};


 // LEFT SIDE DRAWER END 


const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'Profile':
      return 'Profile';
      case 'Myorders':
        return 'My Orders';
      case 'BottomTabStack':
      return 'Home';
  }
};

// BOTTOM TAB CODE START 

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#2874F0',
        inactiveTintColor: 'gray',
        style: {
          padding:6,
          backgroundColor: '#fff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12,
        },
      }}>
        
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="md-home"/>
          ),
        }}
      />

      <Tab.Screen
        name="Myorders"
        component={Myorders}
        options={{
          tabBarLabel: 'Orders',
           tabBarIcon: ({ color, size }) => (
            <Icon  color={color} size={size} name="md-cart"/>
          )
        }}
      />

     <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon  color={color} size={size}  name="md-person"/>
          )
        }}
      />

     <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color, size }) => (
            <Icon  color={color} size={size}  name="md-call"/>
          ),
          tabBarButton: (props) => (<TouchableOpacity  {...props} onPress={()=>{Linking.openURL('tel:7726988292');}}/>)
        }}
      />
    </Tab.Navigator>
  );
};
 
// BOTTOM TAB CODE END 


const HomeScreenStack = ({navigation}) => {

  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setAlign('flex-start'), setAlignsecond(true);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  return (
    <Stack.Navigator initialRouteName="Splashscreennew">
      <Stack.Screen      
        name="Meri Bazar"
        component={Splashscreennew}
        options={{
          title: 'Home activity', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
           },
           headerShown:false
        }}
      />

    <Stack.Screen
      name="FirstPage"
      component={FirstPage}
      options={{
        title: 'First Page', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
     <Stack.Screen
      name="BottomTabStack"
      component={BottomTabStack}
      options={({route,navigation}) => ({
        headerTitle: getHeaderTitle(route),
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />                        
        ),
        headerRight: () => (
            <SetHeaderRight/>
          ),
          
        headerStyle: {
          backgroundColor: '#2874F0', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: '500', //Set Header text style
          left: -18,
          fontSize:0
        },
        //headerShown:false
        //'scrollEnabled': true,

      })}
    />
   <Stack.Screen
      name="Mynotifications"
      component={Mynotifications}
      options={{
        title: 'Mynotifications', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />


<Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        headerShown:false
      }}
    />

  <Stack.Screen
      name="Searchproducts"
      component={Searchproducts}
      options={{
        title: 'Searchproducts', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        headerShown:false
      }}
    />

  <Stack.Screen
      name="Mycarts"
      component={Mycarts}
      options={{
        title: 'Mycarts', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    
   <Stack.Screen
      name="ThirdPage"
      component={ThirdPage}
      options={{
        title: 'Third Page', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
   <Stack.Screen
      name="Productslist"
      component={Productslist}
      options={{
        title: 'Productslist', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    /> 

   <Stack.Screen
      name="Productdetail"
      component={Productdetail}
      options={{
        title: 'Productdetail', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    /> 
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
     
       <Drawer.Navigator
          drawerContentOptions={{
          activeTintColor: '#2874F0',
          itemStyle: {marginVertical: 5 ,},
          swipeEnabled: true, 
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>

         <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home', swipeEnabled: true,
            drawerIcon: ({focused, size}) => (
              <Icon name="ios-cart-outline" color={'#2874F0'} size={16} /> 
          ) }}
          component={HomeScreenStack}/>
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

console.disableYellowBox = true; 
export default App;