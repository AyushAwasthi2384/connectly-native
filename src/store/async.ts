import AsyncStorage from "@react-native-async-storage/async-storage";

export const Async = {
    set: async (key: string, value: any) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error saving to AsyncStorage:", error);
        }
    },
    get: async (key: string): Promise<any> => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error reading from AsyncStorage:", error);
            return null;
        }
    },
    remove: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing from AsyncStorage:", error);
        }
    },
    clear: async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error("Error clearing AsyncStorage:", error);
        }
    },
    keys: async (): Promise<string[]> => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.error("Error getting all keys from AsyncStorage:", error);
            return [];
        }
    },
    multiSet: async (data: [string, any][]) => {
        try {
            const entries: any = data.map(([key, value]) => [key, JSON.stringify(value)]);
            await AsyncStorage.multiSet(entries);
        } catch (error) {
            console.error("Error with multiSet in AsyncStorage:", error);
        }
    },
    multiGet: async (keys: string[]): Promise<Record<string, any>> => {
        try {
            const values = await AsyncStorage.multiGet(keys);
            return Object.fromEntries(values.map(([key, value]) => [key, JSON.parse(value || "")]));
        } catch (error) {
            console.error("Error with multiGet in AsyncStorage:", error);
            return {};
        }
    },
};
