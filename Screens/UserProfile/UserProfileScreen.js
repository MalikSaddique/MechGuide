import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useImagePicker } from '../../hooks/ImagePickerHook';
import MyTabs from '../../hooks/UserTabNavigator';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');
const UserProfileScreen = ({ navigation}) => {
    const { profileImage, handleProfileImagePress } = useImagePicker();
  return (
    
<ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <LinearGradient
    // colors={['#4c669f', '#3b5998', '#192f6a']} 
    colors={['#FFA726', '#FB8C00', '#FF6F00']}
    style={styles.linearGradient}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profileContainer} onPress={handleProfileImagePress}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../assets/Icons/userDefault.png')}
            style={styles.profileImage}
          />
          <View style={styles.cameraIcon}>
            <Ionicons name="camera" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        <Text style={styles.userName}>Malik Siddique</Text>
      </View>
      </LinearGradient>

      <View style={styles.detailSection}>
        <Text style={styles.sectionTitle}>My Details</Text>
        <Text style={styles.detailText}>Username: MalikS</Text>
        <Text style={styles.detailText}>Email: maliksaddique139@gmail.com</Text>
        <Text style={styles.detailText}>Phone: 0310-8741623</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditDetails')}>
          <Text style={styles.buttonText}>Edit Details</Text>
        </TouchableOpacity>
        <MyTabs/>
      </View>
    

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    // position: 'absolute', 
    // left: 0,
    // right: 0,
    // top: 0,
    // height: '100%', 
    width: '100%', 
    alignItems: 'center', 
  },
  backButton: {
    marginLeft: width* 0.03,
    marginTop: height* 0.04,
    // alignItems:'flex-start'

  },
  headerContainer: {
    paddingVertical: 20, // Space above and below the content
    alignItems: 'center', // Center content vertically
    width: '100%'
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
},
accountDetailsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
}
});

export default UserProfileScreen;
