import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import Navbar from './navbar.tsx';
import MapHeader from './Headers/mapHeader.tsx';
import FromToPanel from './FromTo.tsx';

const center = { lat: 42.3601, lng: -71.057083 };

const CustomMarker = ({ position }) => {
  const markerIcon = {
    url: 'images/marker.png',
    scaledSize: new window.google.maps.Size(40, 40),
  };

  return <Marker position={position} icon={markerIcon} />;
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyC9JLiCt-pObabs73CrBYqD-3fR0ySzU7k',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div><Navbar/>
    <MapHeader/>
    <FromToPanel/>
    <div style={{ width: '100%', height: '70vh',paddingTop:"20px" }}>

      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: false,
          streetView: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
      >
        <CustomMarker position={center} />
        <CustomMarker position={{lat: 42.3608, lng: -71.057083 }} />
        <CustomMarker position={{lat: 42.3618, lng: -71.058189 }} />
        <CustomMarker position={{lat: 42.3728, lng: -71.054189 }} />
        <CustomMarker position={{lat: 42.4728, lng: -71.069189 }} />
      </GoogleMap>
    </div>
    </div>
  );
};

export default Map;
