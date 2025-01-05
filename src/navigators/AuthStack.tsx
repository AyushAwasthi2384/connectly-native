// stacks/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import { Routes } from './RouteNames';
import Splash from '../screens/Auth/Splash/SplashNewUser';

const AuthStackNavigator = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <AuthStackNavigator.Screen name="Splash" component={Splash} />
            <AuthStackNavigator.Screen name={Routes.auth.Login} component={Login} />
            <AuthStackNavigator.Screen name={Routes.auth.Register} component={Register} />
        </AuthStackNavigator.Navigator>
    );
};

export default AuthStack;
