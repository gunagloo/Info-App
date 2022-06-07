import * as React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function EventsScreen ( {navigation} ) {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', 
        alignItems: 'center', backgroundColor: 'lightgreen' }}>
            <Text>Events First Page!</Text>
        </View>
    );
}

const Stack = createStackNavigator()

export default function EventsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "EventsHome" component = {EventsScreen} />
        </Stack.Navigator>
    )
}