
import React from 'react';
import {View,StyleSheet, Text} from 'react-native';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';

export  function RegisterationScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>REGISTER</Heading>
      <Input style={styles.input} placeholder={'Name'} />
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <Input style={styles.input} placeholder={'Hospital Name'} />
      <Input style={styles.input} placeholder={'Password'}  secureTextEntry />
    <FilledButton title={'Register'}
    style={styles.loginButton}
    onPress={() => {}}
    />
 <TextButton title={'Already have an account?login here'} onPress={() =>{}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems:'center',
    paddingTop: 80
  },
  title:{
      marginBottom:40,
  },
  input: {
      marginVertical: 6,
  },
  loginButton:{
      marginVertical: 60
      
  }
})