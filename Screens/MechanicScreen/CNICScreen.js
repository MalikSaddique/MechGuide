import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRegistrationData } from '../../hooks/RegistrationDataContext';
import Icon from 'react-native-vector-icons/Ionicons';
import SuccessMessage from '../../hooks/SuccessMessage';

const {width, height}= Dimensions.get('window')

const CNICScreen = ({ navigation }) => {
  const { registrationData, updateRegistrationData } = useRegistrationData();
  const [cnicFront, setCnicFront] = useState(registrationData.cnicFront);
  const [cnicBack, setCnicBack] = useState(registrationData.cnicBack);
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
              setCnicFront(imageUri);
              updateRegistrationData({ cnicFront: imageUri });
            } else {
              setCnicBack(imageUri);
              updateRegistrationData({ cnicBack: imageUri });
            }
            if (cnicFront && cnicBack) {
              setSuccessVisible(true);
              setTimeout(() => setSuccessVisible(false), 3000); 
            }
          }
    }
  };



  const handleNext = () => {
    if (!cnicFront || !cnicBack) {
      Alert.alert('Error', 'Please upload both front and back sides of your CNIC.');
      return;
    }
    navigation.navigate('SelfieWithId'); 
  };

  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <SuccessMessage visible={successVisible} message="Image Sucessfully Uploaded!" />
      <Text style={styles.headerText}>CNIC (front side)</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage('front')}>
          <Image source={cnicFront? { uri: cnicFront } : require('../../assets/Icons/CNICFront.png')} style={styles.image} />
          {/* <Text style={styles.addPhotoText}>Add a photo</Text> */}
      </TouchableOpacity>

      <Text style={styles.headerText}>CNIC (back side)</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage('back')}>
        {/* {cnicBack ? ( */}
          <Image source={cnicBack? { uri: cnicBack }: require('../../assets/Icons/CNICBack.png')} style={styles.image} />
        {/* ) : ( */}
          {/* <Text style={styles.addPhotoText}>Add a photo</Text> */}
        {/* )} */}
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

export default CNICScreen;
