// stacks/MainStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Main/Home';
import ProfileScreen from '../screens/Main/Profile';
import { Routes } from './RouteNames';

const MainStackNavigator = createNativeStackNavigator();

const MainStack = () => {
    return (
        <MainStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <MainStackNavigator.Screen name={Routes.main.Home} component={HomeScreen} />
            <MainStackNavigator.Screen name={Routes.main.Profile} component={ProfileScreen} />
        </MainStackNavigator.Navigator>
    );
};

export default MainStack;
