import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  };

  onChangeText = (key: string, val: any) => {
    this.setState({ [key]: val });
  };

  signUp = async () => {
    const { username, password, email, phoneNumber } = this.state;
    try {
    //    signup logic
        console.log('user successfully signed up!: ', 'success')
    }
  };
}
