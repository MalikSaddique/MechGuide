// MechanicDrawer.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const MechanicDrawer = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>Mechanic Panel</Text>
      </View>

      {/* Dashboard/Home */}
      <DrawerItem
        label="Dashboard"
        icon={({ size }) => <Icon name="speedometer-outline" size={size} />}
        onPress={() => navigation.navigate('Dashboard')}
      />

      {/* Job Requests */}
      <DrawerItem
        label="Job Requests"
        icon={({ size }) => <Icon name="construct-outline" size={size} />}
        onPress={() => navigation.navigate('JobRequests')}
      />

      {/* Service History */}
      <DrawerItem
        label="Service History"
        icon={({ size }) => <Icon name="time-outline" size={size} />}
        onPress={() => navigation.navigate('ServiceHistory')}
      />

      {/* Earnings */}
      <DrawerItem
        label="Earnings"
        icon={({ size }) => <Icon name="wallet-outline" size={size} />}
        onPress={() => navigation.navigate('Earnings')}
      />

      {/* Profile & Settings */}
      <DrawerItem
        label="Profile & Settings"
        icon={({ size }) => <Icon name="person-circle-outline" size={size} />}
        onPress={() => navigation.navigate('ProfileSettings')}
      />

      {/* Availability Calendar */}
      <DrawerItem
        label="Availability Calendar"
        icon={({ size }) => <Icon name="calendar-outline" size={size} />}
        onPress={() => navigation.navigate('AvailabilityCalendar')}
      />

      {/* Skills & Services */}
      <DrawerItem
        label="Skills & Services"
        icon={({ size }) => <Icon name="hammer-outline" size={size} />}
        onPress={() => navigation.navigate('SkillsServices')}
      />

      {/* Ratings & Reviews */}
      <DrawerItem
        label="Ratings & Reviews"
        icon={({ size }) => <Icon name="star-outline" size={size} />}
        onPress={() => navigation.navigate('RatingsReviews')}
      />

      {/* Support/Help Center */}
      <DrawerItem
        label="Support/Help Center"
        icon={({ size }) => <Icon name="help-circle-outline" size={size} />}
        onPress={() => navigation.navigate('SupportHelpCenter')}
      />

      {/* Log Out */}
      <DrawerItem
        label="Log Out"
        icon={({ size }) => <Icon name="log-out-outline" size={size} />}
        onPress={() => {/* Implement log out functionality */}}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Other styles...
});

export default MechanicDrawer;
