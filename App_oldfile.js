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

import Productslist from './pages/Productslist';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Profile from './pages/Profile';
import Myorders from './pages/Myorders';
import Mycarts from './pages/Mycarts';
import Productdetail from './pages/Productdetail';
import Mynotifications from './pages/Mynotifications';
import Splashscreennew from './pages/Splashscreennew';

import Login from './pages/Login';
import Searchproducts from './pages/Searchproducts';
import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import SettingScreen from './pages/SettingScreen';
import SplashScreen from 'react-native-splash-screen';
import CustomSidebarMenu from './pages/CustomSidebarMenu';
import styles from '../styles/style';
  

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
        })}
     >

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
        })}
     >

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

const NavigationDrawerStructure = (props) => {
  
  //Structure for the navigatin Drawer
  const toggleDrawer = () => { console.log('dd');
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
              'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png',
          }}
          style={{width: 75, height: 26, marginLeft: -25, marginTop:15}}
        />
      </TouchableOpacity>

    </View>
  );
};

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
          title: 'First Page', //Set Header Title
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
        title: 'Second Page', //Set Header Title
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
        title: 'Second Page', //Set Header Title
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
        title: 'Second Page', //Set Header Title
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
        title: 'Second Page', //Set Header Title
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
        title: 'Second Page', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

        },
        headerRight: () => (
          <SetHeaderRightnew/>
        ),
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
        title: 'Product List', //Set Header Title
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

/*const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
  );
};*/
  

const App = () => {
  return (
    <NavigationContainer>
     
       <Drawer.Navigator
          drawerContentOptions={{
          activeTintColor: '#2874F0',
          itemStyle: {marginVertical: 5},
          swipeEnabled: true, // to disable swipe gesture for a specific page(s)
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>

         <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home Screen Option', swipeEnabled: true }}
          component={HomeScreenStack}
        />
         <Drawer.Screen
            icon={({ color, size }) => (
              <Icon name="md-person-outline" color={color} size={16} /> 
            )}
            name="Login"
            options={{drawerLabel: 'Login'}}
            component={Login}
          />
      </Drawer.Navigator>
        
    </NavigationContainer>
  );
};

console.disableYellowBox = true; 
export default App;