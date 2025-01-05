import React, { useState, useRef } from 'react';
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

const OtpVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const otpInputs = useRef([]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;

        setOtp(newOtp);

        if (text.length === 1 && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            otpInputs.current[index - 1].focus();
        }
    };

    const handleResend = () => {
        console.log('Resend OTP');
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        console.log('OTP entered:', otpCode);
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
                {/* Back Icon */}
                <TouchableOpacity style={styles.backButton}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>

                {/* Title and Subtitle */}
                <Text style={styles.title}>Verify your phone number</Text>
                <Text style={styles.subtitle}>
                    We’ve sent an SMS with an activation code to your phone +91 0000000000
                </Text>

                {/* OTP Input */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={[
                                styles.otpInput,
                                (focusedIndex === index || otp[index] !== '') && styles.focusedOtpInput,
                            ]}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            ref={(ref) => (otpInputs.current[index] = ref)}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            onKeyPress={(event) => handleKeyPress(event, index)}
                            autoFocus={index === 0}
                        />
                    ))}
                </View>

                {/* Edit and Resend */}
                <View style={styles.resendContainer}>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Edit Number</Text>
                    </TouchableOpacity>
                    <Text style={styles.resendText}>I didn’t receive a code </Text>
                    <TouchableOpacity onPress={handleResend}>
                        <Text style={styles.resendHighlight}>Resend</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '600',
        color: '#000',
        marginBottom: 10,
        marginTop: 40,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        backgroundColor: 'transparent',
    },
    focusedOtpInput: {
        borderColor: '#d81b60',
        borderWidth: 2,
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    editText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '600',
        marginRight: 5,
    },
    resendText: {
        fontSize: 14,
        color: '#666',
    },
    resendHighlight: {
        fontSize: 14,
        color: '#d81b60',
        fontWeight: '600',
    },
    verifyButton: {
        backgroundColor: '#d81b60',
        paddingVertical: 14,
        borderRadius: 10,
        width: width * 0.9,
        alignItems: 'center',
        marginTop: 20,
        position: 'absolute',
        bottom: height * 0.05,
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default OtpVerification;
