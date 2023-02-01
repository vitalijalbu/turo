import instance from './client';

export const getLocation = (value) => {
    return instance.get(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${value}`);
};
