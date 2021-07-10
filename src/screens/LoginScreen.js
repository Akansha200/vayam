
import React from 'react';
import {View,StyleSheet, Text} from 'react-native';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';

export  function LoginScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <Input style={styles.input} placeholder={'Password'}  secureTextEntry />
    <FilledButton title={'Login'}
    style={styles.loginButton}
    onPress={() => {}}
    />
    <TextButton title={'Have u an account? Create one'} onPress={() =>{}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems:'center',
    paddingTop: 100
  },
  title:{
      marginBottom:60,
  },
  input: {
      marginVertical: 8,
  },
  loginButton:{
      marginVertical: 60
      
  }
})