import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const UserProfileScreen = ({ navigation, route }) => {
    // const userImageUri = route.params?.userImageUri;
    const handleChangeProfileImage = () => {
        // Logic to change the profile image
      };
  return (
    
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        
     
        {/* User image and name */}
        <View style={styles.profileContainer}>
        <Image
         source={require('../../assets/Icons/userDefault.png')}
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.cameraIcon} onPress={handleChangeProfileImage}>
        <Ionicons name="camera" size={20} color="#fff" />
      </TouchableOpacity>
      </View>
        <Text style={styles.userName}>Malik Siddique</Text>
      </View>

      {/* User details */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>My Details</Text>
        <Text style={styles.detailText}>Email: maliksaddique139@gmail.com</Text>
        <Text style={styles.detailText}>Phone: 0310-8741623</Text>
        <TouchableOpacity style={styles.button} onPress={() => {/* Edit details logic */}}>
          <Text style={styles.buttonText}>Edit Details</Text>
        </TouchableOpacity>
      </View>

      {/* More sections like 'My Vehicles', 'Settings', 'Change Password', etc. */}
      
      {/* Log Out Button */}
      <TouchableOpacity style={styles.button} onPress={() => {/* Log out logic */}}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginLeft: width* 0.03,
    marginTop: height* 0.04,
    // alignItems:'flex-start'

  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1A73E8',
},
profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  },
  cameraIcon: {
    position: 'absolute', // Position over the profile image
    bottom: 0, // Positioned at the bottom of the profile image
    right: 0, // Positioned to the right (you can adjust as needed)
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: 8,
    borderRadius: 16, // Circular shape
  },
userName: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#FFFFFF',
},
detailSection: {
  backgroundColor: '#FFFFFF',
  padding: 20,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
},
detailText: {
  fontSize: 16,
  marginBottom: 5,
},
button: {
  backgroundColor: '#FF7A00', 
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 10,
},
buttonText: {
  fontSize: 18,
  color: '#FFFFFF',
  fontWeight: 'bold',
}
});

export default UserProfileScreen;
