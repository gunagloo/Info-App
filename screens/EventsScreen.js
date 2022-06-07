import * as React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function EventsScreen () {
    const navigation = useNavigation()
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
            <Text>Events First Page!</Text>
            <Button onPress= {() => navigation.navigate("EventsSecondScreen")} title="Second Screen"/>
        </View>
    );
}

function EventsSecondScreen() {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
            <Text>Events Second Page!</Text>
        </View>
    );
}

const Stack = createStackNavigator()

export default function EventsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "EventsHome" component = {EventsScreen} />
            <Stack.Screen name = "EventsSecondScreen" component = {EventsSecondScreen} />
        </Stack.Navigator>
    )
}