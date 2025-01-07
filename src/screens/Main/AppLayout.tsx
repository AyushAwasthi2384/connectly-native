import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Topbar from '../../components/ui/Topbar';
import Navbar from '../../components/ui/Navbar';
import HomePage from '../../components/HomePage';

const { width } = Dimensions.get('window');

const AppLayout = () => {
    const [curScreen, setCurScreen] = React.useState('home');
    return (
        <View style={styles.container}>
            {/* top bar */}
            <Topbar />

            {/* main content */}
            <View style={styles.content}>
                { curScreen === 'home' && <HomePage />}
            </View>

            {/* navbar */}
            <Navbar currentScreen={curScreen} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f4',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 18,
        color: '#aaa',
    },
});

export default AppLayout;
