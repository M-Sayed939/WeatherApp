/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage/HomePage';
import profile from './profile';
import search from './search';
import settings from './settings';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function BottomNavScreens() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#e91e63'}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={search}
       options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={profile}
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="person" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Settings" component={settings}
       options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="settings" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}
export default BottomNavScreens;
