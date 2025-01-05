import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeProvider.js";

const MyComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.text, { color: theme.colors.text }]}>
                Welcome to the App!
            </Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.colors.primary }]}
                onPress={toggleTheme}
            >
                <Text style={[styles.buttonText, { color: theme.colors.text }]}>
                    Toggle Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
    },
});

export default MyComponent;
