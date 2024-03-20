import React, { useState } from 'react';
// import LogRocket from '@logrocket/react-native';
// LogRocket.init('kkw2cz/mechguide')
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const InputField = ({ iconName, placeholder, secureTextEntry, toggleVisibility, visibility }) => (
    <View style={styles.inputContainer}>
      <FontAwesome name={iconName} size={24} color="#6D6A6A" />
      <TextInput
        style={styles.input}
        
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      {toggleVisibility && (
        <TouchableOpacity onPress={visibility}>
          <FontAwesome5 name={secureTextEntry ? 'eye-slash' : 'eye'} size={20} color="#6D6A6A" />
        </TouchableOpacity>
      )}
    </View>
  );

const LoginScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
        <View style={styles.topHeader}>
      <Text style={styles.header}>Login Account</Text>
      <Text style={styles.subheader}>Welcome back! </Text>
      </View>

      <Image
        source={require('../assets/MechGuideLogo/LogoMechGuide.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>MechGuide</Text>
      <Text style={styles.tagline}>Find the Right Mechanic For You</Text>

      <View style={styles.inputContainerPass}>
        <FontAwesome name='user' size={24} style={styles.inputIcon}/>
      <InputField
        style={styles.input}
        //iconName="user"
        placeholder="Enter email id"
       keyboardType="email-address"
      />
      </View>
    <View style={styles.inputContainerPass}>
    <FontAwesome name='lock' size={24} style={styles.inputIcon}/>
      <InputField
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={!passwordVisible}
        toggleVisibility={true}
        visibility={()=> setPasswordVisible(!passwordVisible)}
      />
     
    </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.startline} />
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.endline} />
      </View>

      <View style={styles.socialContainer}>
  <SocialButton iconName="google" size={25} color="#DB4437" onPress={() => {}}/>
  <SocialButton iconName="apple" size={25} color="black" onPress={() => {}} />
</View>

<View style={styles.registerContainer}>
  <Text style={styles.registerText}>Not registered yet? </Text>
  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
    <Text style={styles.registerButton}>Create Account</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};

const SocialButton = ({ iconName, onPress, color, size, bgColor }) => (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <FontAwesome name={iconName} size={size} color={color} backgroundColor={bgColor} />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#425DA0', 
    width:'100%',
    flexDirection:'column',
  },
  header: {
    fontSize: width * 0.06, 
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 4,
    marginTop: height* 0.11,
    marginLeft:-180,
    fontFamily:'Roboto',
  },
  subheader: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    marginBottom: 16,
    marginLeft:-180,
  },
  eyeIcon: {
    //paddingRight: 10,
  },
  inputContainerPass:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '80%',
    paddingHorizontal:15,
    marginBottom: 10,

  },
  logo: {
    width: width * 0.3, 
    height: width * 0.3, 
    resizeMode: 'contain',
    marginBottom: 5,
  },
  title: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tagline: {
    fontSize: width * 0.020,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#FFFFFF',
    //borderRadius: 10,
    width: '95%',
    paddingHorizontal:15,
    //marginBottom: 15,
  },
  inputIcon: {
    marginLeft: 10,
    color:'#6D6A6A',
  },
  input: {
    flex: 1,
    width: '100%', // Use a percentage of screen width
    paddingVertical: 10,
    marginLeft:10,
    //backgroundColor: '#FFFFFF', 
    //fontSize: width * 0.04, 
  },
  button: {
    width: '80%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7A00', 
    marginBottom: 10,
  },
  buttonText: {
    fontSize: width * 0.05, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical: 20,
  },
  startline:{
    flex:1,
    height:1,
    marginStart:40,
    backgroundColor: '#FFFFFF',
    //color:'#FFFFFF'
  },
  endline:{
    flex:1,
    height:1,
    marginEnd:40,
    backgroundColor: '#FFFFFF',
    //color:'#FFFFFF'
  },
  orText:{
    marginHorizontal: 10,
    color:'#FFFFFF',
   // backgroundColor:'#425DAO',
    paddingHorizontal:5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: 20,
  },
  socialButton: {
    paddingLeft: 25,
    paddingRight:25,
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
  },
  registerButton: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    fontWeight: '900',
  },
});

export default LoginScreen;
