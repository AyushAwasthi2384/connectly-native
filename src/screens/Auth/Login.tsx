import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={styles.container}>
            {/* Title and Subtitle */}
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus justo nisi,
            </Text>

            {/* Email Input */}
            <TextInput
                style={[styles.input, emailFocused && styles.inputFocused]}
                placeholder="Username or Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
            />

            {/* Password Input */}
            <View style={[styles.passwordContainer, passwordFocused && styles.inputFocused]}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
                    <MaterialCommunityIcons
                        name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#aaa"
                    />
                </TouchableOpacity>
            </View>

            {/* Forget Password Link */}
            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Signup Link */}
            <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupText}>
                    Don’t have an account? <Text style={styles.signupHighlight}>Sign up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    inputFocused: {
        borderColor: '#d81b60',
        borderWidth: 1.5,
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    passwordInput: {
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#333',
    },
    iconContainer: {
        paddingHorizontal: 15,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#d81b60',
        fontWeight: '600',
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#d81b60',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        width: width * .9,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    signupButton: {
        marginTop: 20,
        position: 'absolute',
        bottom: height * 0.04,
    },
    signupText: {
        fontSize: 14,
        color: '#666',
    },
    signupHighlight: {
        color: '#d81b60',
        fontWeight: '600',
    },
});

export default LoginPage;
