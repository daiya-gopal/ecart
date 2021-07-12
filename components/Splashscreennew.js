/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';
//Import all required component
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

       props.navigation.navigate('BottomTabStack')
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      /*AsyncStorage.getItem('user_id').then(value =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        )
      );*/
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>

      <Image
          source={{ uri : 'https://blgindia.com/blghr/images/chrome-capture.png' }}
                  style={{ height: 160,  width: '38%', resizeMode: 'contain', margin: 0 }} />
     
      <ActivityIndicator
        animating={animating}
        color="#7facf5"
        size="small"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2874f0',
  },
  
  activityIndicator: {
    alignItems: 'center',
    height: 70,
  },
});