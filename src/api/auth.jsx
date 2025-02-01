import axios from 'axios';

const API_URL = 'http://your-laravel-backend.test/api/';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}login`, credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
