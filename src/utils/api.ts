import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
    baseURL: "https://api.example.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor (e.g., add auth token)
apiClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        console.log(`[API] Request to ${config.url}`, config);
        const token = await AsyncStorage.getItem("authToken"); // Example token
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error: any) => {
        console.error("[API] Request error:", error);
        return Promise.reject(error);
    }
);

// Response interceptor (e.g., global error handling)
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log(`[API] Response from ${response.config.url}`, response.data);
        return response;
    },
    (error: any) => {
        console.error("[API] Response error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export const apiCall = async (endpoint: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) => {
    try {
        console.log(`[API] Calling ${endpoint} with method ${method} and data`, data);
        const response = await apiClient({
            url: endpoint,
            method,
            data,
        });
        console.log(`[API] Received response from ${endpoint}`, response.data);
        return response.data;
    } catch (error) {
        console.error(`[API] Error calling ${endpoint}`, error);
        throw error;
    }
};

