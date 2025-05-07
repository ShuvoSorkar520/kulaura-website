
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize Mapbox map
    // Replace this token with your own Mapbox public token in production
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [91.6368, 24.5965], // Center of the provided map (Bhujai Bazar area)
      zoom: 12,
    });

    // Add navigation controls (zoom in/out)
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'bottom-right'
    );

    // Add a marker at the center location
    new mapboxgl.Marker({ color: '#1e7e34' })
      .setLngLat([91.6368, 24.5965])
      .addTo(map.current);

    // Cleanup on unmount
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className="h-full w-full rounded-md overflow-hidden" />
  );
};

export default Map;
