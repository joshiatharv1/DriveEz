import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import Navbar from './navbar.tsx';
import MapHeader from './Headers/mapHeader.tsx';
import Spinner from './Spinner.tsx';

const center = { lat: 42.3601, lng: -71.057083 };

interface CustomMarkerProps {
  position: { lat: number; lng: number };
}
// The Map component renders a Google Map using the @react-google-maps/api library,
// displaying a set of custom markers at predefined locations.

const CustomMarker: React.FC<CustomMarkerProps> = ({ position }) => {
  const markerIcon = {
    url: 'images/marker.png',
    scaledSize: new window.google.maps.Size(40, 40),
  };

  return <Marker position={position} icon={markerIcon} />;
};

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyC9JLiCt-pObabs73CrBYqD-3fR0ySzU7k',
  });

  if (!isLoaded) {
    return <div><Spinner /></div>;
  }

  return (
    <div>
      <Navbar />
      <MapHeader />
      {/* <FromToPanel/> */}
      <div style={{ width: '100%', height: '70vh', paddingTop: '20px' }}>

        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
          }}
        >
          <CustomMarker position={center} />
          <CustomMarker position={{ lat: 42.3608, lng: -71.057083 }} />
          <CustomMarker position={{ lat: 42.3618, lng: -71.058189 }} />
          <CustomMarker position={{ lat: 42.3728, lng: -71.054189 }} />
          <CustomMarker position={{ lat: 42.354264, lng: -71.063833 }} />
          <CustomMarker position={{ lat: 42.357808, lng: -71.056550 }} />
          <CustomMarker position={{ lat: 42.366777, lng: -71.068446 }} />
          <CustomMarker position={{ lat: 42.365476, lng: -71.052969 }} />
          <CustomMarker position={{ lat: 42.360550, lng: -71.062850 }} />
          <CustomMarker position={{ lat: 42.361026, lng: -71.052721 }} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
