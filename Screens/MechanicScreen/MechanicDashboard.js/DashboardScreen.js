import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import MyTabs from '../../../hooks/UserTabNavigator';
import { useDrawerStatus } from '@react-navigation/drawer';



const DashboardScreen = ({ navigation }) => {
  // const drawerStatus = useDrawerStatus();
  // const toggleDrawer = () => {
  //   if (drawerStatus === 'closed') {
  //     navigation.dispatch(DrawerActions.openDrawer());
  //   } else {
  //     navigation.dispatch(DrawerActions.openDrawer());
  //   }
  // };
  return (
    <ScrollView style={styles.container}>
        <View style={styles.roundedContainer}>
      <TouchableOpacity style={styles.header}
          // This will open the drawer
          onPress={() => navigation.navigate({})}>
        <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        </View>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today</Text>
        <Text style={styles.cardAmount}>$244.0</Text>
        <View style={styles.cardDetails}>
          <Text>14 Rides</Text>
          <Ionicons name="time-outline" size={16} />
          <Text>23H</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Wallet Balance</Text>
        <Text style={styles.cardAmount}>$1544.00</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.cardAction}>Withdrawal</Text>
        </TouchableOpacity>
      </View>
      <MyTabs/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EFF6',
  },
  header: {
    backgroundColor: '#FF7A00',
    paddingHorizontal: 20,
    paddingTop: 40, 
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    // Shadow styles
    // ... other styles for card
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // ... other styles for card title
  },
  cardAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    // ... other styles for card amount
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // ... other styles for card details
  },
  cardAction: {
    color: '#FF7A00',
    fontWeight: 'bold',
    // ... other styles for card action text
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    // ... other styles for bottom navigation
  },
  roundedContainer: {
    backgroundColor: '#FF7A00', 
    borderRadius: 20, 
    marginHorizontal: 10, 
    marginTop: -20, 
    padding: 20, 
    // Shadow properties
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 50,
  },
  // Add styles for other components and navigation items
});

export default DashboardScreen;
