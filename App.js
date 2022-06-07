import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventsStack from './screens/EventsScreen'
import ContactsScreen from './screens/ContactsScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            //Set the icon based on which route it is (name of the tab)
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Events') {
              iconName = 'list';
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'user': 'user-o'
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
         tabBarActiveTintColor: "navy",
         tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" options={{headerShown: false}} component={EventsStack} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}