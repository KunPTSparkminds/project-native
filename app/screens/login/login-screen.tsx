import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../assets/images';
import Icon from 'react-native-vector-icons/AntDesign';

type LoginProps = {};
export const LoginScreen: React.FunctionComponent<LoginProps> = () => {
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
      }}
      source={images.signInBG}>
      <View
        style={{
          alignItems: 'center',
          height: '100%',
        }}>
        <View
          style={{
            paddingTop: '15%',
          }}>
          <Text style={styles.title}>Login</Text>
          <View
            style={[
              styles.textInput,
              {
                marginBottom: 18,
              },
            ]}>
            <Icon name="user" size={16} color="#D9D9D9" />
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View style={styles.textInput}>
            <Icon name="lock" size={16} color="#D9D9D9" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={{marginTop: 48}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.textConnect}>or connect with</Text>
          <View style={styles.social}>
            <TouchableOpacity
              style={[
                styles.btnSocial,
                {
                  backgroundColor: '#35A6EF',
                },
              ]}>
              <Icon name="facebook-square" size={16} color="#ffffff" />
              <Text style={styles.textSocial}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnSocial,
                {
                  backgroundColor: '#5073B5',
                },
              ]}>
              <Icon name="twitter" size={16} color="#ffffff" />
              <Text style={styles.textSocial}>Twitter</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.textConnect,
              {
                marginTop: 55,
              },
            ]}>
            Dont' have account?{'    '}
            <Text style={{color: '#6A74CF'}}>Sign up</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 50,
    height: '100%',
    alignItems: 'center',
    paddingTop: '15%',
  },
  container: {
    flex: 1,
  },
  input: {
    fontFamily: 'Blinker-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#D0D0D0',
    paddingLeft: 19,
    width: '90%',
  },
  textInput: {
    width: 240,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 67,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 38,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
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
