import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {LoginScreen} from './app/screens/login';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 50,
    height: '100%',
    alignItems: 'center',
    paddingTop: '10%',
  },
  container: {
    flex: 1,
  },
  input: {
    fontFamily: 'Blinker-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#D0D0D0',
    paddingLeft: 10,
    width: '90%',
  },
  textInput: {
    width: 240,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 67,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
    color: '#ffffff',
    fontFamily: 'Blinker-SemiBold',
    marginBottom: 37,
  },
  button: {
    width: 250,
    height: 35,
    backgroundColor: '#6A74CF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 77,
  },
  textBtn: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Blinker-Regular',
    color: '#ffffff',
  },
  forgot: {
    marginTop: 24,
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Blinker-Regular',
  },
  social: {
    flexDirection: 'row',
  },
  btnSocial: {
    width: 150,
    height: 35,
    borderRadius: 77,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 21,
  },
  textSocial: {
    fontFamily: 'Blinker-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#ffffff',
    paddingHorizontal: 10,
  },
  textConnect: {
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'Blinker-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#7A7A7A',
  },
});

export default App;
