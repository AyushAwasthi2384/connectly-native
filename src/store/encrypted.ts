import EncryptedStorage from "react-native-encrypted-storage";

export const Encrypted = {
    set: async (key: string, value: any) => {
        try {
            await EncryptedStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error saving to EncryptedStorage:", error);
        }
    },
    get: async (key: string): Promise<any> => {
        try {
            const value = await EncryptedStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error reading from EncryptedStorage:", error);
            return null;
        }
    },
    remove: async (key: string) => {
        try {
            await EncryptedStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing from EncryptedStorage:", error);
        }
    },
    clear: async () => {
        try {
            await EncryptedStorage.clear();
        } catch (error) {
            console.error("Error clearing EncryptedStorage:", error);
        }
    },
};
