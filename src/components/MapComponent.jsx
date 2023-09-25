import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = ({ coordinates }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hzaW5kaHUwNDAyIiwiYSI6ImNsbXozZW9qcjB2OHYya256eDh6djNtazUifQ.LHW2WOgKj04bIqUNJuAzVw';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
      center: coordinates, // [longitude, latitude]
      zoom: 12, // Adjust the initial zoom level as needed
    });

    // Add a marker to the map
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

    // Cleanup when the component unmounts
    return () => map.remove();
  }, [coordinates]);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
