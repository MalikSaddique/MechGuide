import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
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

const RegisterScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
  return (
    // <ScrollView >
        <View style={styles.container}>
        <View style={styles.topHeader}>
      <Text style={styles.header}>Register Account</Text>
      <Text style={styles.subheader}>Join MechGuide! </Text>
      </View>
      <Text style={styles.subsubheader}>SignUp/Register! </Text>

      <View style={styles.inputContainerPass}>
      <FontAwesome name="user" size={20} style={styles.inputIcon} />
        <InputField style={styles.input} placeholder="Enter Full Name" />
      </View>
        <View style={styles.inputContainerPass}>
    <FontAwesome name='envelope' size={20} style={styles.inputIcon}/>
      <InputField
        style={styles.input}
        //iconName="user"
        placeholder="Enter email id"
       keyboardType="email-address"
      />
      </View>
      <View style={styles.inputContainerPass}>
        <FontAwesome name="phone" size={20} style={styles.inputIcon} />
        <InputField style={styles.input} placeholder="Enter Phone No" keyboardType="phone-pad" />
        </View>
    <View style={styles.inputContainerPass}>
    <FontAwesome name='lock' size={20} style={styles.inputIcon}/>
      <InputField
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={!passwordVisible}
        toggleVisibility={true}
        visibility={()=> setPasswordVisible(!passwordVisible)}
      />
    </View>
    <View style={styles.inputContainerPass}>
        <FontAwesome name="lock" size={20} style={styles.inputIcon} />
        <InputField
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry={!confirmPasswordVisible}
          toggleVisibility={true}
          visibility={()=>setConfirmPasswordVisible(!confirmPasswordVisible)}
        />
      </View>
      <TouchableOpacity
        style={styles.termsContainer}
        onPress={() => setTermsAccepted(!termsAccepted)}
      >
        <FontAwesome
          name={termsAccepted ? 'check-square-o' : 'square-o'}
          size={20}
          color={termsAccepted ? '#FFFFFF' : '#FFFFFF'} 
        />
        <Text style={styles.termsText}>
          By registering you are agreeing with our
          <Text style={styles.termsLink}> Terms of Use </Text> and <Text style={styles.termsLink}> Privacy Policy</Text> 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChooseLocationScreen')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.startline} />
        <Text style={styles.orText}>Or sign up with</Text>
        <View style={styles.endline} />
      </View>

      <View style={styles.socialContainer}>
  <SocialButton iconName="google" size={25} color="#DB4437" onPress={() => {}}/>
  <SocialButton iconName="apple" size={25} color="black" onPress={() => {}} />
</View>

<View style={styles.registerContainer}>
  <Text style={styles.registerText}>Already have an Account? </Text>
  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.registerButton}>Sign In</Text>
  </TouchableOpacity>
</View>
</View>
    //  {/* </ScrollView> */}
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
    marginTop: height * 0.070,
    marginLeft:-180,
    fontFamily:'Roboto',
  },
  subheader: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    marginBottom: 16,
    marginLeft:-180,
  },
  subsubheader:{
    fontSize: width * 0.07,
    color: '#FFFFFF',
    marginBottom: 16,
   // marginLeft:-180,

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
    width: '100%', 
    paddingVertical: 10,
    marginLeft:10,
    //backgroundColor: '#FFFFFF', 
    //fontSize: width * 0.04, 
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    margin:50,
    //marginBottom:10,
  },
  termsText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#FFFFFF', 
  },
  termsLink: {
    color: '#FFFFFF', 
    textDecorationLine: 'underline',
    fontWeight:'bold'
  },
  button: {
    width: '80%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7A00',
    marginVertical:10, 
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

export default RegisterScreen;
