import React from 'React';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { goToAuth } from './navigation';
import { Navigation } from 'react-native-navigation';

import { USER_KEY } from './config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Home extends React.Component<{ componentId: string }> {
  static get options() {
    return {
      topNar: {
        title: {
          text: 'Home',
        },
      },
    };
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      goToAuth();
    } catch (err) {
      console.log('Error SIgning Out: ', err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen</Text>
        <Button onPress={this.logout} title="Sign Out" />
        <Button
          title="View next screen"
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              },
            });
          }}
        />
      </View>
    );
  }
}
