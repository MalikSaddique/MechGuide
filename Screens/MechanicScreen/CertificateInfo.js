import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRegistrationData } from '../../hooks/RegistrationDataContext';
import Icon from 'react-native-vector-icons/Ionicons';
import SuccessMessage from '../../hooks/SuccessMessage';

const {width, height}= Dimensions.get('window')

const CertificateScreen = ({ navigation }) => {
  const { registrationData, updateRegistrationData } = useRegistrationData();
  const [certificateImageFront, setCertificateImageFront] = useState(registrationData.certificateImageFront);
  const [certificateImageBack, setCertificateImageBack] = useState(registrationData.certificateImageBack);
  const certificateFrontSource = certificateImageFront ? { uri: certificateImageFront } : require('../../assets/Icons/CertificateFront.png');
  const certificateBackSource = certificateImageBack ? { uri: certificateImageBack } : require('../../assets/Icons/CertificateBack.png');
  const [successVisible, setSuccessVisible] = useState(false);


  const pickImage = async (side) => {
    let result = await ImagePicker.launchImageLibraryAsync({
    //  mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        if (result.assets && result.assets.length > 0 ) {
            const imageUri = result.assets[0].uri;
            if (side === 'front') {
              setCertificateImageFront(imageUri);
              updateRegistrationData({ certificateImageFront: imageUri });
            } else {
              setCertificateImageBack(imageUri);
              updateRegistrationData({ certificateImageBack: imageUri });
            }
          }
          if (certificateImageFront && certificateImageBack) {
            setSuccessVisible(true);
            setTimeout(() => setSuccessVisible(false), 3000); 
          }
    }
  };


  const handleNext = () => {
    if (!certificateImageFront|| !certificateImageBack) {
      Alert.alert('Error', 'Please upload both front and back sides of your Certificate.');
      return;
    }
    navigation.navigate('LicenseScreenMech'); 
  };

  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <SuccessMessage visible={successVisible} message="Image Sucessfully Uploaded!" />
      <Text style={styles.headerText}>Certificate (front side)</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage('front')}>
          <Image source={certificateFrontSource} style={styles.image} />
          {/* <Text style={styles.addPhotoText}>Add a photo</Text> */}
      </TouchableOpacity>

      <Text style={styles.headerText}>Certificate (back side)</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage('back')}>
        {/* {cnicBack ? ( */}
          <Image source={certificateBackSource} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60,
    marginVertical:20,
  },
  imagePicker: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  addPhotoText: {
    color: '#C0C0C0',
    fontSize: 16,
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
});

export default CertificateScreen;
