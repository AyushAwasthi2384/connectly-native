import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confPasswordFocused, setConfPasswordFocused] = useState(false);
    const [mobileFocused, setMobileFocused] = useState(false);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Title and Subtitle */}
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus justo nisi.
                </Text>

                {/* Email Input */}
                <TextInput
                    style={[styles.input, emailFocused && styles.inputFocused]}
                    placeholder="Email"
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
                        accessible
                        accessibilityLabel={
                            passwordVisible ? 'Hide password' : 'Show password'
                        }
                    >
                        <MaterialCommunityIcons
                            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                            size={24}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password Input */}
                <View style={[styles.passwordContainer, confPasswordFocused && styles.inputFocused]}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry={!confirmPasswordVisible}
                        onFocus={() => setConfPasswordFocused(true)}
                        onBlur={() => setConfPasswordFocused(false)}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        accessible
                        accessibilityLabel={
                            confirmPasswordVisible
                                ? 'Hide confirm password'
                                : 'Show confirm password'
                        }
                    >
                        <MaterialCommunityIcons
                            name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                            size={24}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>

                {/* Mobile Number Input */}
                <TextInput
                    style={[styles.input, mobileFocused && styles.inputFocused]}
                    placeholder="Mobile Number"
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    onFocus={() => setMobileFocused(true)}
                    onBlur={() => setMobileFocused(false)}
                />

                {/* Sign Up Button */}
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Login Link */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        Already have an account? <Text style={styles.loginHighlight}>Log in</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f4',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333',
        marginTop: height * 0.08,
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
        marginBottom: 15,
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
    signUpButton: {
        backgroundColor: '#d81b60',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 10,
        width: width * 0.9,
        alignItems: 'center',
        marginTop: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    loginButton: {
        marginTop: 20,
    },
    loginText: {
        fontSize: 14,
        color: '#666',
    },
    loginHighlight: {
        color: '#d81b60',
        fontWeight: '600',
    },
});

export default Register;
