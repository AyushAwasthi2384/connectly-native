import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Topbar = () => {
    const nav = useNavigation();
    return (
        <View style={styles.topBar}>
            <MaterialCommunityIcons style={styles.searchIcon} name="magnify" size={24} color="#aaa" />
            <TouchableOpacity style={styles.addButton}>
                <View style={styles.addIcon}>
                    <MaterialCommunityIcons name="plus" size={24} color="#000" />
                </View>
            </TouchableOpacity>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.filterButton}>
                <Ionicons name="funnel-outline" size={18} color="#fff" />
                <View style={styles.filterBadge}>
                    <Text style={styles.badgeText}>3</Text>
                </View>
                <MaterialCommunityIcons name="close" size={14} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Chat')}>
                <Ionicons name="chatbubble-ellipses-outline" size={28} color="#000" />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
    searchIcon: {
        position: 'absolute',
        left: 80,
        zIndex: 1,
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        height: 38,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingLeft: 40,
        fontSize: 16,
        color: '#000',
    },
    filterButton: {
        position: 'relative',
        height: 38,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#d81b60',
        padding: 8,
        borderRadius: 5,
    },
    filterBadge: {
        // position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 10,
        color: '#d81b60',
        fontWeight: '600',
    },
    addButton: {
        height: 38,
        marginRight: 10,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    addIcon: {
        backgroundColor: '#fff',
        borderRadius: 3,
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

export default Topbar;
