import React from 'react';
import MapWrapper from './MapWrapper';
import {DirectionsRenderer} from 'react-google-maps';
 
const {maps} = window.google;

export default class DirectionMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directions:undefined
        }
    }
    
    componentWillMount() {
        const DirectionsService = new maps.DirectionsService();
        DirectionsService.route(
            {
                origin: new maps.LatLng(41.85073, -87.65126),
                destination: new maps.LatLng(41.85258, -87.65141),
                travelMode: maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    render() {
        return (            
            <div>
                <MapWrapper
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultZoom={12}
                    defaultCenter={{ lat: 41.85073, lng: -87.65126 }}
                >
                    <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                </MapWrapper>
            </div>            
        );
    }
}