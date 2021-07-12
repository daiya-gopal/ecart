// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import { Component,useState } from 'react';
import { StyleSheet, Text, View,Image, ScrollView,TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/style';
  
  export default class Login extends Component {

    static navigationOptions = {
      title: 'Page 1',
      //Sets Header text of Status Bar
    }
    
    constructor(props) {
      super();
      this.state = { 
        email: '', 
        password: '',
        isLoading: false
      }
    }
    
     addInput = () => { 
      this.props.navigation.navigate('Productdetail');
    }

    render(){ 
      return (
      <View style={styles.container_login}>
          
        <View style={styles.logo}> 
          <Image
              source={{ uri : 'https://blgindia.com/blghr/images/chrome-capture.png' }}
              style={styles.login_logo}
            />
        </View>
      
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#fff"
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          keyboardType='email-address'/>
      </View>

      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#fff"/>
      </View>

      <TouchableOpacity onPress={this.addInput} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Signup</Text>
      </TouchableOpacity>
    </View>)
    }
  }
 