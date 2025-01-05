// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Image,
//     Dimensions,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const AadhaarVerification = () => {
//     const [input, setInput] = useState('');
//     const [isFocused, setIsFocused] = useState(false);

//     const handleVerify = () => {
//         console.log('Input:', input);
//         // Add verification logic here
//     };

//     return (
//         <View style={styles.container}>
//             {/* Aadhaar Logo */}
//             <Image
//                 source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Aadhaar_Logo.svg' }}
//                 style={styles.logo}
//                 resizeMode="contain"
//             />

//             {/* Title and Subtitle */}
//             <Text style={styles.title}>Verify your Adhar</Text>
//             <Text style={styles.subtitle}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus justo nisi,
//             </Text>

//             {/* Input Field */}
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={[
//                         styles.input,
//                         { borderColor: isFocused ? '#D81B60' : '#CCC' }, // Dynamic border color
//                     ]}
//                     placeholder="Enter here"
//                     placeholderTextColor="#999"
//                     value={input}
//                     onChangeText={setInput}
//                     onFocus={() => setIsFocused(true)} // Set focus state
//                     onBlur={() => setIsFocused(false)} // Remove focus state
//                 />
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
//                 <Text style={styles.verifyButtonText}>Verify</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FAF9F6',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingTop: height * 0.3,
//     },
//     logo: {
//         width: 150,
//         height: 150,
//         marginBottom: 20,
//     },
//     title: {
//         fontSize: 32,
//         fontWeight: '600',
//         color: '#000',
//         marginBottom: 10,
//     },
//     subtitle: {
//         fontSize: 14,
//         color: '#666',
//         textAlign: 'center',
//         marginHorizontal: 20,
//         marginBottom: 30,
//     },
//     inputContainer: {
//         width: '100%',
//         marginBottom: 20,
//     },
//     inputLabel: {
//         fontSize: 14,
//         color: '#888',
//         marginBottom: 5,
//     },
//     input: {
//         width: '100%',
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#CCC',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         backgroundColor: 'transparent',
//         fontSize: 16,
//         color: '#000',
//     },
//     verifyButton: {
//         backgroundColor: '#D81B60',
//         paddingVertical: 15,
//         borderRadius: 8,
//         width: width * 0.9,
//         alignItems: 'center',
//         position: 'absolute',
//         bottom: height * 0.05,
//     },
//     verifyButtonText: {
//         color: '#FFF',
//         fontSize: 16,
//         fontWeight: '600',
//     },
// });

// export default AadhaarVerification;


import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const AadhaarVerification = () => {
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleVerify = () => {
        console.log('Input:', input);
        // Add verification logic here
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Aadhaar Logo */}
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Aadhaar_Logo.svg',
                    }}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Title and Subtitle */}
                <Text style={styles.title}>Verify your Aadhaar</Text>
                <Text style={styles.subtitle}>
                    Please enter the details below to proceed with the verification process.
                </Text>

                {/* Input Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            { borderColor: isFocused ? '#D81B60' : '#CCC' }, // Dynamic border color
                        ]}
                        placeholder="Enter Aadhaar Number"
                        placeholderTextColor="#999"
                        value={input}
                        onChangeText={setInput}
                        keyboardType="numeric"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </View>

                {/* Verify Button */}
                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '600',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#000',
    },
    verifyButton: {
        backgroundColor: '#D81B60',
        paddingVertical: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: height * 0.05,
    },
    verifyButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AadhaarVerification;
