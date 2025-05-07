
import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || mapInitialized) return;

    try {
      // Initialize Mapbox map with the user provided token
      mapboxgl.accessToken = mapboxToken;
      
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

      setMapInitialized(true);
      
      // Store the token in localStorage for future use
      localStorage.setItem('mapboxToken', mapboxToken);
    } catch (error) {
      console.error("Error initializing map:", error);
      setShowTokenInput(true);
    }
  };

  useEffect(() => {
    // Check if we have a saved token
    const savedToken = localStorage.getItem('mapboxToken');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (mapboxToken && !mapInitialized) {
      initializeMap();
    }
    
    // Cleanup on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, mapInitialized]);

  if (showTokenInput) {
    return (
      <div className="h-full w-full rounded-md overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-md">
          <h3 className="text-sm font-medium mb-2">Enter your Mapbox token:</h3>
          <p className="text-xs text-gray-500 mb-3">
            Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
          </p>
          <div className="flex gap-2">
            <Input
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1Ijoi..."
              className="flex-1 text-xs"
            />
            <Button 
              size="sm" 
              onClick={() => {
                if (mapboxToken) {
                  setShowTokenInput(false);
                  initializeMap();
                }
              }}
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="mt-2 w-full text-center">
          <img 
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
            alt="Map placeholder" 
            className="w-full h-32 object-cover rounded-md"
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="h-full w-full rounded-md overflow-hidden" />
  );
};

export default Map;
