import React, { useState, useEffect, useRef  } from 'react';
import { View, StyleSheet, Dimensions, Platform, Alert, TouchableOpacity, Text,Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import OptionBottomSheet from './BottomSheet/OptionBottomSheet';
import { DrawerActions } from '@react-navigation/native';
// import DrawerMenu from './DrawerMenu';
// import StackNavigator from './NavigationDrawer';

const { width, height } = Dimensions.get('window');

const UserLocationScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setLocation(currentLocation);
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.005, // smaller values for a closer zoom
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  const handleRegionChange = (region) => {
    setMapRegion(region);
  }; 

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1); // Open the bottom sheet to the first snap point
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.navigate('DrawerNavigation')}
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Ionicons name="md-menu" size={32} color="#000" />
      </TouchableOpacity>
          {/* <StackNavigator/> */}
      {mapRegion && (
        <MapView
          style={styles.map}
          region={mapRegion}
          onRegionChangeComplete={handleRegionChange}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        </MapView>
      )}
       <TouchableOpacity
        style={styles.grabberWrapper}
        onPress={openBottomSheet}
        activeOpacity={0.8}>
        <View style={styles.grabber} />
      </TouchableOpacity>
      <OptionBottomSheet ref={bottomSheetRef} onOptionPress={openBottomSheet} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Semi-transparent blue background
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: '#ffffff', // White background for the buttons
    paddingHorizontal: 30, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 10, // Rounded corners
    marginVertical: 5, // Margin between buttons
    width: '90%', // 90% of container width
    flexDirection: 'row', // Icon and text in a row
    justifyContent: 'space-between', // Space between icon and text
    alignItems: 'center', // Center items vertically
  },
  lastOptionButton: {
    marginBottom: 20, // Additional bottom margin for the last button
  },
  optionText: {
    color: '#000000', // Black color for the text
  },
  menuIcon: {
    position: 'absolute',
    top:  20, 
    left: 10,
    zIndex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
},
grabberWrapper: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  alignItems: 'center',
  padding: 10,
  borderTopWidth: 5,
  borderTopColor: '#ccc',
},
grabber: {
  width: 100,
  height: 7,
  borderRadius: 5,
  backgroundColor: '#FF7A00',
},
});

export default UserLocationScreen;
