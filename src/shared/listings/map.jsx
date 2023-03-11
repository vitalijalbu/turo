import { useEffect } from 'react';
import L from 'leaflet';

export default function Map({ lat, lng, title }) {
  useEffect(() => {
    if (lat !== null && lng !== null) {
      // Create a new map instance
      const map = L.map('listing-map').setView([lat, lng], 13);

      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18,
      }).addTo(map);

      // Add a marker to the map
      L.marker([lat, lng]).addTo(map)
        //.bindPopup({title})
        //.openPopup();
    }
  }, [lat, lng]);

  return <div className="map-container" id="listing-map"/>;
}
