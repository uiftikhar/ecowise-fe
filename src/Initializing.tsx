import React from 'React';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { USER_KEY } from './config';
import { goHome, goToAuth } from './navigation';

export default class Initializing extends React.Component {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      console.log('USER', user);
      user ? goHome() : goToAuth();
    } catch (err) {
      console.log('err ', err);
      goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
