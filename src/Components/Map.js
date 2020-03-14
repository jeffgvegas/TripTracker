import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";



class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 8 }
      >
        
      </GoogleMap>
      
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
