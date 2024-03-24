// EditDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import DrawerMenu from '../DrawerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const EditDetailsScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');


  const handleSave = () => {
    // Logic to save the updated details
    // This might involve calling an API and then navigating back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>Profile settings</Text>
        <View style={styles.inputContainerPass}>
      <FontAwesome name="user" size={20} style={styles.inputIcon} />
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First name"
        style={styles.input}
      />
      </View>
      <View style={styles.inputContainerPass}>
      <FontAwesome name="user" size={20} style={styles.inputIcon} />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last name"
        style={styles.input}
      />
      </View>
        <View style={styles.inputContainerPass}>
    <FontAwesome name='envelope' size={20} style={styles.inputIcon}/>
    <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      </View>
      <View style={styles.inputContainerPass}>
        <FontAwesome name="phone" size={20} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Enter Phone No" keyboardType="phone-pad" />
        </View>
        <View style={styles.inputContainerPass}>
        <FontAwesome name="map-marker" size={20} style={styles.inputIcon} />
        <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Location"
        style={styles.input}
      />
        </View>
        <TouchableOpacity>
        <View style={styles.button}>
    <Text style={styles.buttonText}>Save</Text>
</View>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    padding: 10,
  },
  header: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign:'center'
  },
  label: {
    marginVertical: 10,
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#ddd',
    // padding: 10,
    // marginBottom: 20,
    // borderRadius: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // White colored underline for each input
    color: '#000', // Text input color
    marginHorizontal: 20,
    margin: 10,
    paddingVertical: 5,
  },
  inputContainerPass:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal:15,
    marginBottom: 15,
  },
  inputIcon: {
    marginLeft: 10,
    color:'#6D6A6A',
  },
//   input: {
//     flex: 1,
//     width: '100%', 
//     paddingVertical: 10,
//     marginLeft:10,
//     //backgroundColor: '#FFFFFF', 
//     //fontSize: width * 0.04, 
//   },
  button: {
    width: '100%',
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
});

export default EditDetailsScreen;
