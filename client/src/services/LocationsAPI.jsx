const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations');
        if (!response.ok){
            throw new Error('Network Error');
        }
        const data = (await response.json()).rows;
        return data;
    } catch (error) {
        console.error('Error fetching all locations:', error);
        throw error;
    }
};

export default {getAllLocations};