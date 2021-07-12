import React, {Component} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Header extends React.Component {

  render() {
    console.log('props', this.props)
    return (
      <View style={styles.container}>
        <Button title={'Go to next screen'} onPress={() => this.props.navigation.navigate('Screen2',  {})} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#006600',
    justifyContent: 'flex-end'
  }
});