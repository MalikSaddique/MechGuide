// MechanicRegistrationConfirmationScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MechanicRegistrationConfirmationScreen = ({ navigation }) => {
  
  const handleNextSteps = () => {
    navigation.navigate("MechDashboardscreen")
  };

  return (
    <View style={styles.container}>
        <View style={styles.subcontainer}>
        <MaterialIcons name="check-circle" size={24} color="green" />
      <Text style={styles.title}>Registration Completed!</Text>
      </View>
      <Text style={styles.description}>
        Your application to join as a mechanic is under review. You will receive a notification once your registration has been approved.
      </Text>
      
      {/* <Text style={styles.info}>
        In the meantime, you can check out the following resources:
      </Text> */}
      
      <TouchableOpacity style={styles.button} onPress={handleNextSteps}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', 
  },
  subcontainer:{
 flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#daf5e1', 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
    // paddingBottom:10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop:20,
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF7A00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MechanicRegistrationConfirmationScreen;
