import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MechanicRegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join as a Mechanic</Text>
      <Text style={styles.description}>
        Become part of our community and offer your services to a wide range of clients.
      </Text>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('BasicInformationScreen')}>
        <Text style={styles.buttonText}>Register Now</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  registerButton: {
    backgroundColor: '#FF7A00',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MechanicRegistrationScreen;
