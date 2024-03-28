import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRegistrationData } from '../../hooks/RegistrationDataContext';
import Icon from 'react-native-vector-icons/Ionicons';
import SuccessMessage from '../../hooks/SuccessMessage';

const { width, height } = Dimensions.get('window');

const SelfieWithIDScreen = ({ navigation }) => {
    const { registrationData, updateRegistrationData } = useRegistrationData();
  const [selfieImage, setSelfieImage] = useState(null);
  const [holdingCnicImage, setholdingCnicImage]= useState(useRegistrationData.holdingCnicImage);
  const [successVisible, setSuccessVisible] = useState(false);
  

  const pickSelfieImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
        const imageUri = result.assets[0].uri; 
        setSelfieImage(imageUri);
        updateRegistrationData({ holdingCnicImage: imageUri });
        setSuccessVisible(true); 
        setTimeout(() => setSuccessVisible(false), 3000); 
      }
  };

  const handleNext = () => {
    if (selfieImage) {
        updateRegistrationData({ holdingCnicImage: selfieImage });
      }
    console.log('Image submitted', selfieImage);
    navigation.navigate('CertificateScreenMech'); 
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <SuccessMessage visible={successVisible} message="Image Sucessfully Uploaded!" />
      <Text style={styles.title}>Selfie with ID</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
          Please take a clear selfie with your ID card in hand.
        </Text>
       <Image source={selfieImage? { uri: selfieImage } : require('../../assets/Icons/SelfiePhoto.png')} style={styles.selfieImage} />
        <TouchableOpacity onPress={pickSelfieImage} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add a photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {/* <Text style={styles.supportText}>
        If you have questions, please contact our customer support.
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton:{
    position: 'absolute', 
    top: Platform.OS === 'ios' ? 44 : 20, 
    left: 10, 
    zIndex: 10, 
    backgroundColor: 'transparent', 
    padding: 20, 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructionsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
  },
  selfieImage: {
    width: width - 40,
    height: height / 3,
    marginTop: 20,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#FF7A00',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 30,
 
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#FF7A00',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  supportText: {
    position: 'absolute',
    bottom: 80,
    fontSize: 14,
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
});

export default SelfieWithIDScreen;