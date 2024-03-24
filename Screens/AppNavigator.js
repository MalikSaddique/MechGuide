//import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './StartScreen.js';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen.js';
import LocationScreen from './ChooseLocationScreen.js';
import UserLocationScreen from './UserCurrentLocationScreen.js';
import DrawerMenu from './DrawerMenu.js';
import PrivacyPolicyScreen from './DrawerScreens/PrivacyPolicy.js';
import UserProfileScreen from './UserProfile/UserProfileScreen.js';
import EditDetailsScreen from './UserProfile/EditDetailsScreen.js';
import MechanicRegistrationScreen from './MechanicScreen/MechanicRegistrationScreen.js';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
    <Drawer.Screen name="menu" component={UserLocationScreen} options={headerShown=false} />
    
  </Drawer.Navigator>
  );
}


function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ChooseLocationScreen" component={LocationScreen} />
      <Stack.Screen name="UserLocationScreen" component={UserLocationScreen} />
      {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer} /> */}
      <Stack.Screen 
        name="DrawerNavigation" 
        component={DrawerNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
      <Stack.Screen name="EditDetails" component={EditDetailsScreen}/>
      <Stack.Screen name="MechanicScreen" component={MechanicRegistrationScreen}/>

    </Stack.Navigator>
    
  );
}

export default AppNavigator;
