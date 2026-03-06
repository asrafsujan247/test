import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface LatLng {
  lat: number;
  lng: number;
}

const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center: LatLng = {
    lat: -3.745,
    lng: -38.523,
  };

const PropertyMapBody: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDu5JmJXtznvkMXuoMqgz3Ze4Mftw1V3Pc">
      <div className="relative">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
        <div className="absolute top-0 left-0 m-4 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-700">This is a card inside the Google Map.</p>
        </div>
      </div>
    </LoadScript>
  )
}

export default PropertyMapBody