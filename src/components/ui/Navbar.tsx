import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import selTab from '../../assets/navSelector.png';

const { width } = Dimensions.get('window');

const Navbar = ({ currentScreen }: any) => {
    const [screen, setScreen] = useState(currentScreen || "home");

    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem}>
                <MaterialCommunityIcons name={`${screen === "home" ? "home-variant": "home-variant-outline"}`} size={24} color={`${screen === "home" ? "#fff" : "#aaa"}`} />
                <Text style={styles.navText}>Home</Text>
                <Image source={selTab} style={{...styles.navSelector, opacity: screen === "home" ? 1 : 0}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name={`${screen === "following" ? "heart": "heart-outline"}`} size={24} color={`${screen === "following" ? "#fff" : "#aaa"}`} />
                <Text style={styles.navText}>Following</Text>
                <Image source={selTab} style={{...styles.navSelector, opacity: screen === "following" ? 1 : 0}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name={`${screen === "alerts" ? "notifications-sharp": "notifications-outline"}`} size={24} color={`${screen === "alerts" ? "#fff" : "#aaa"}`} />
                <Text style={styles.navText}>Alerts</Text>
                <Image source={selTab} style={{...styles.navSelector, opacity: screen === "alerts" ? 1 : 0}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialCommunityIcons name={`${screen === "profile" ? "account": "account-outline"}`} size={24} color={`${screen === "profile" ? "#fff" : "#aaa"}`} />
                <Text style={styles.navText}>Profile</Text>
                <Image source={selTab} style={{...styles.navSelector, opacity: screen === "profile" ? 1 : 0}} />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#27262B',
        borderTopColor: '#eaeaea',
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: width/4,
        paddingHorizontal: width/17
    },
    navSelector: {
        width: "100%",
        height: 10,
        marginTop: 5,
    },
    navText: {
        fontSize: 12,
        color: '#fff',
    },
});

export default Navbar;
