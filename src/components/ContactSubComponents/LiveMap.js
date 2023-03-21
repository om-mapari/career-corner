import React from 'react';
import Map from './Map';

const LiveMap = () => {
  const [lat, setLat] = React.useState(37.7749);
  const [lng, setLng] = React.useState(-122.4194);

  React.useState(()=>{
    setLat(37.7749)
    setLng(-122.4194)
  },[])

  return (
    <div>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={lat}
        lng={lng}
      />
    </div>
  );
};

export default LiveMap;
