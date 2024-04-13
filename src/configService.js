// Assuming you have axios installed
import axios from 'axios';

const configService = {
    async fetchConfig() {
        try {
            const response = await axios.get('/config.json');
            return response.data;
        } catch (error) {
            console.error('Error fetching config:', error);
            return null;
        }
    }
};

export default configService;
