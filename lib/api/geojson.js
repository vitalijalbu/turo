import instance from './client';

export const getLocation = async (value) => {
    return instance.get(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=it&addressdetails=0&limit=5&q=${value}`);
};
