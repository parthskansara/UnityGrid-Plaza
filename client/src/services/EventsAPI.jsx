const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events/all');
        if (!response.ok){
            throw new Error('Network Error');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all locations:', error);
        throw error;
    }
};

const getEventByLocation = async (location_id) => {
    try {
        const response = await fetch(`/api/events/${location_id}`);
        if (!response.ok){
            throw new Error('Network Error');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all locations:', error);
        throw error;
    }
};

export default { getAllEvents, getEventByLocation };