// stacks/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import { Routes } from './RouteNames';
import Splash from '../screens/Auth/Splash/SplashNewUser';
import OtpVerification from '../screens/Auth/Otp';
import AadhaarVerification from '../screens/Auth/Aadhar';
import AadhaarOtpVerification from '../screens/Auth/AadharOtp';

const AuthStackNavigator = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName='Otp'>
            <AuthStackNavigator.Screen name="Splash" component={Splash} />
            <AuthStackNavigator.Screen name={Routes.auth.Login} component={Login} />
            <AuthStackNavigator.Screen name={Routes.auth.Register} component={Register} />
            <AuthStackNavigator.Screen name={Routes.auth.Otp} component={OtpVerification} />
            <AuthStackNavigator.Screen name={Routes.auth.Aadhaar} component={AadhaarVerification} />
            <AuthStackNavigator.Screen name={Routes.auth.AadhaarOtp} component={AadhaarOtpVerification} />
        </AuthStackNavigator.Navigator>
    );
};

export default AuthStack;
