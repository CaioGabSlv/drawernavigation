import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Notifications from './src/screens/Notifications';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Home'
          component={Home}
        />
        <Drawer.Screen
          name='Settings'
          component={Settings}
        />
        <Drawer.Screen
          name='Notifications'
          component={Notifications}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}