import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './Screens/AppNavigator';
import DrawerMenu from './Screens/DrawerMenu';

const App = () => {
  return (
      <SafeAreaProvider>
      
    <NavigationContainer>
       <AppNavigator />
    </NavigationContainer>
      </SafeAreaProvider>
 
  );
};

export default App;
