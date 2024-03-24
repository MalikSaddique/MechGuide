import React,  { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useImagePicker } from '../hooks/ImagePickerHook';
import MechanicRegistrationScreen from './MechanicScreen/MechanicRegistrationScreen';


const { width, height } = Dimensions.get('window');

const DrawerMenu = (props) => {
  // const [profileImage, setProfileImage] = React.useState(null);
  const { profileImage, handleProfileImagePress } = useImagePicker();
  const navigation= useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
    // colors={['#4c669f', '#3b5998', '#192f6a']} 
    colors={['#FFA726', '#FB8C00', '#FF6F00']}
    style={styles.linearGradient}>
      <View style={styles.userInfoSection}>
      <TouchableOpacity onPress={handleProfileImagePress}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../assets/Icons/userDefault.png')} 
            style={styles.userImage}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileTextContainer} onPress={()=>navigation.navigate('UserProfile')}>
          <Text style={styles.userName}>Malik Siddique</Text>
          <Icon name="arrow-forward" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      </LinearGradient>

      {/* <DrawerItemList {...props} /> */}

      <DrawerItem
        label="Home"
        onPress={() => {}}
        icon={({ color, size }) => (
          <Icon name="home-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="My Wallet"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="wallet-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Service History"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="timer-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="notifications-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="FAQs"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="alert-circle-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="settings-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => props.navigation.navigate('PrivacyPolicy')}
        icon={({ color, size }) => (
          <Icon name="construct-outline" color={color} size={size} />
        )}
      />
       <DrawerItem
        label="Log Out"
        onPress={() => { /* navigate to mechanic mode */ }}
        icon={({ color, size }) => (
          <Icon name="log-out-outline" color={color} size={size} />
        )}
      />
      <TouchableOpacity style={styles.mechMode} onPress={() => {navigation.navigate('MechanicScreen')}}>
        <Text style={styles.buttonText}>Mechanic Mode</Text>
      </TouchableOpacity>

      
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    //backgroundColor: '#1A73E9', 
    // backgroundColor: '#1A73E8', // Replace with your preferred background color
    // paddingTop: 48, // Adjust the padding to fit your layout
    // paddingBottom: 24, // Adjust the padding to fit your layout
    // paddingLeft: 20, // Aligns with the other drawer items
    // paddingRight: 20, // Ensures padding is consistent
    // flexDirection: 'row', // Layout direction for the avatar and name
    // alignItems: 'center', // Vertical alignment
    // justifyContent: 'space-between', 
  },
  userImage: {
    width: 90,
    height: 90,
    borderRadius: 70,
    marginBottom: 10,
  },
  profileTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:10,
    marginEnd: width* 0.05,
  },
  userName: {
    color: '#FF7A00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#FF7A00',
    marginLeft: 10,
  },
  mechMode:{
    width: '90%',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7A00',
    marginLeft:width* 0.04, 
    marginBottom: 10,
    marginTop:height*0.05
  },
  buttonText:{
    fontSize: width * 0.07, 
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
  
});

export default DrawerMenu;
