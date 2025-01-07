// stacks/MainStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLayout from '../screens/Main/AppLayout';
import ProfileScreen from '../screens/Main/Profile';
import { Routes } from './RouteNames';
import ChatPage from '../screens/Main/ChatPage';

const MainStackNavigator = createNativeStackNavigator();

const MainStack = () => {
    return (
        <MainStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <MainStackNavigator.Screen name={Routes.main.Home} component={AppLayout} />
            <MainStackNavigator.Screen name={Routes.main.Profile} component={ProfileScreen} />
            <MainStackNavigator.Screen name={Routes.main.Chat} component={ChatPage} />
        </MainStackNavigator.Navigator>
    );
};

export default MainStack;
