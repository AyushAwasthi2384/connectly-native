import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeProvider';

const HomeScreen = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.text, { color: theme.colors.text }]}>
                Welcome to Dynamic Theming!
            </Text>
            <Button title="Toggle Theme" onPress={toggleTheme} color={theme.colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});

export default HomeScreen;
