import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <Map style={{padding: 24, margin: 0, width: '50vw', height: 500}} google={this.props.google} zoom={14}>

        {    // Outer loop to create parent
            this.props.locations.map(function(attraction) { 
              return   <Marker
                        name={attraction['address']}
                        position={attraction['latLng']} />; 
            })
         }

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>'this.state.selectedPlace.name'</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrrxZxajW7IfAoiZTWHymyfKXsnZhZ2Ek')
})(MapContainer)