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
import BasicInformationScreen from './MechanicScreen/BasicInfoScreen.js';
import { RegistrationDataProvider } from '../hooks/RegistrationDataContext.js';
import CNICScreen from './MechanicScreen/CNICScreen.js';
import SelfieWithIDScreen from './MechanicScreen/SelfieWithIdScreen.js';
import CertificateScreen from './MechanicScreen/CertificateInfo.js';
import DrivingLicense from './MechanicScreen/DrivingLicenseScreen.js';
import MechanicRegistrationConfirmationScreen from './MechanicScreen/MechanicConfirmationScreen.js';
import DashboardScreen from './MechanicScreen/MechanicDashboard.js/DashboardScreen.js';
import MechanicDrawer from './MechanicScreen/MechanicDashboard.js/MechanicDrawer.js';

import { NavigationContainer } from '@react-navigation/native';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const userRole = 'user';
  return (
    // <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
    <Drawer.Navigator drawerContent={(props) => 
      userRole === 'mechanic' ? <MechanicDrawer {...props} /> : <DrawerMenu {...props} />
    }>
    <Drawer.Screen name="Menu"  component={UserLocationScreen} options={{headerShown: true}} />
    
  </Drawer.Navigator>
 
     );
}

function MechDrawer(){
  return (
    <Drawer.Navigator drawerContent={(props) => <MechanicDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {/* ... other screens if any */}
    </Drawer.Navigator>
  );
}


function AppNavigator() {
  return (
    <RegistrationDataProvider>
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
      <Stack.Screen name="BasicInformationScreen" component={BasicInformationScreen}/>
      <Stack.Screen name="MechCNICScreen" component={CNICScreen}/>
      <Stack.Screen name="SelfieWithId" component={SelfieWithIDScreen}/>
      <Stack.Screen name="CertificateScreenMech" component={CertificateScreen}/>
      <Stack.Screen name="LicenseScreenMech" component={DrivingLicense}/>
      <Stack.Screen name="MechRegistrationConfirmation" component={MechanicRegistrationConfirmationScreen}/>
      <Stack.Screen name="MechDashboardscreen" component={DashboardScreen}/>
      <Stack.Screen 
        name="Drawer" 
        component={MechDrawer} 
        options={{ headerShown: false }}
      />
      

    </Stack.Navigator>
    
    </RegistrationDataProvider>
    
  );
}

export default AppNavigator;
