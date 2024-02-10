import React from 'react';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
const MapWrapper = withGoogleMap(props => {
    return <GoogleMap {...props}>{props.children}</GoogleMap>
});

export default MapWrapper;

