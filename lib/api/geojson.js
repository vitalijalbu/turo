import instance from './client';

export const getLocation = async (value) => {
    return instance.get(`https://nominatim.openstreetmap.org/search?format=json&limit=5&countrycodes=it&q=${value}`);
};
