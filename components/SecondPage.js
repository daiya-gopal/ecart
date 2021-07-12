// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const SecondPage = ({navigation,route}) => {

  console.disableYellowBox = true; 

  navigation.setOptions({
    title: 'Notfication',
    headerStyle: {
        backgroundColor: 'red', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
    },
  });
    
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another
          Using React Navigation
        </Text>
        <Text style={styles.textStyle}>
          Values passed from First page: {route.params.paramKey}
        </Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});