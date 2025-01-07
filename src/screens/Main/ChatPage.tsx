import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const chatData = [
    {
        id: '1',
        name: 'John Smith',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '2',
        name: 'Jenny Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '3',
        name: 'Alexander White',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '4',
        name: 'Emily Brown',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '5',
        name: 'Michael Jackson',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '6',
        name: 'David Lee',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '7',
        name: 'Sarah Taylor',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '8',
        name: 'Robert Jones',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '9',
        name: 'Kevin Williams',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },
    {
        id: '10',
        name: 'Laura Miller',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        time: '10 min',
        badgeCount: 2,
        profilePic: 'https://placehold.co/100/png',
    },

];

const ChatPage = () => {

    const navigation = useNavigation();

    const renderChatItem = ({ item }) => (
        <View style={styles.chatItem}>
            <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
            <View style={styles.chatDetails}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
            <View style={styles.chatMeta}>
                <Text style={styles.chatTime}>{item.time}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.badgeCount}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.backArrow} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
                    </Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#aaa" />
                    <TouchableOpacity>
                        {/* <Text style={styles.filterIcon}>🔍</Text> */}
                        <Ionicons name="search" size={24} color="#d81b60" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.filterIcon}>
                    <Ionicons name="funnel-outline" size={18} color="#D91656" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            {/* Chat List */}
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id}
                renderItem={renderChatItem}
                contentContainerStyle={styles.chatList}
            />

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
                <Text style={styles.fabIcon}>
                    <MaterialCommunityIcons name="square-edit-outline" size={24} color="#fff" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    backArrow: {
        fontSize: 18,
        color: '#333',
        marginRight: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6e6e4',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    filterIcon: {
        // fontSize: 16,
        backgroundColor: '#E6E6E4',
        height: 40,
        width: 32,
        marginLeft: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionIcon: {
        fontSize: 18,
        color: '#333',
        marginLeft: 16,
    },
    chatList: {
        paddingHorizontal: 20,
        paddingTop: 8,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    chatDetails: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    chatMessage: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    chatMeta: {
        alignItems: 'flex-end',
    },
    chatTime: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    badge: {
        backgroundColor: '#d81b60',
        borderRadius: 3,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        backgroundColor: '#d81b60',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    fabIcon: {
        fontSize: 24,
        color: '#fff',
    },
});

export default ChatPage;
