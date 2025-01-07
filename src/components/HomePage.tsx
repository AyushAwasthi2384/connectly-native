import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const profiles = [
    {
        id: '1',
        name: 'Ayush Awasthi',
        age: 20,
        role: 'CEO at Vivax',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus justo nisi,',
        profilePic: 'https://placehold.co/100/png',
        coverPhoto: 'https://placehold.co/350/png',
        interests: ['Tech', 'Leadership', 'Coding'],
    },
    {
        id: '2',
        name: 'John Doe',
        age: 30,
        role: 'Software Engineer at Google',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        profilePic: 'https://placehold.co/100/png',
        coverPhoto: 'https://placehold.co/350/png',
        interests: ['AI', 'Machine Learning', 'Cloud Computing'],
    },
    {
        id: '3',
        name: 'Jane Doe',
        age: 28,
        role: 'UX Designer at Amazon',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profilePic: 'https://placehold.co/100/png',
        coverPhoto: 'https://placehold.co/350/png',
        interests: ['UX Design', 'Product Design', 'Design'],
    },

];

const ProfileCard = () => {
    const renderProfile = ({ item }) => (
        <View style={styles.card}>
            {/* Cover Photo */}
            <Image source={{ uri: item.coverPhoto }} style={styles.coverPhoto} />
            {/* Profile Information */}
            <View style={styles.profileInfo}>
                <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
                <View style={styles.profileDetails}>
                    <Text style={styles.name}>{item.name}, {item.age}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

                {/* Interests */}
            </View>
            <View style={styles.interestsContainer}>
                <View style={styles.interestsList}>
                    <Text style={styles.interestsLabel}>Interests:</Text>
                    {item.interests.map((interest, index) => (
                        <View key={index} style={styles.interest}>
                            <Text style={styles.interestText}>{interest}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Know More Button */}
            <TouchableOpacity style={styles.knowMoreButton}>
                <Text style={styles.knowMoreText}>Know More →</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={profiles}
            keyExtractor={(item) => item.id}
            renderItem={renderProfile}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    card: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 7,
        padding: 16,
    },
    coverPhoto: {
        width: width * 0.82,
        height: width * 0.82,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 12,
        // borderWidth: 1,
        // borderColor: '#ccc',
        width: width * 0.82,
    },
    profileDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0,
        // borderWidth: 1,
        // borderColor: '#ccc',
        width: width * 0.66,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    role: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: '#000',
    },
    interestsContainer: {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: width * 0.82,
        gap: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 8,
        marginTop: 8,
    },
    interestsLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    interestsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    interest: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
        margin: 4,
    },
    interestText: {
        fontSize: 12,
        color: '#555',
    },
    knowMoreButton: {
        paddingBottom: 3,
        borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#ccc',
        width: width * 0.3,
        paddingLeft: 12,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    knowMoreText: {
        color: '#27262B',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ProfileCard;
