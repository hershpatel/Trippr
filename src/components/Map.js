import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  calculateCentroids = () => {
    let clusters = this.props.clusters['clusters'];
    let centroids = []
    for (var clusterName in clusters) {
      let pins = clusters[clusterName];
      let latSum = 0;
      let lngSum = 0;
      let numPins = pins.length;
      for (var i = 0; i < numPins; i++) {
        var pin = pins[i];
        latSum += pin['lat'];
        lngSum += pin['lon'];

      }
      let lat = latSum / numPins;
      let lng = lngSum / numPins;
      centroids.push([clusterName, {lat, lng}]);
    }
    return centroids;
  }


  render() {
    const centroids = this.calculateCentroids();
    return (
      <Map style={{padding: 24, margin: 0, width: '50vw', height: 500}} google={this.props.google} zoom={12} 
      initialCenter={{
        lat: 47.621188,
        lng: -122.318701
      }}>
      {
        centroids.map(function(centroid) {
          return <Marker
          name={centroid[0]}
          position={centroid[1]} />; 
        })
      }


        {    
            this.props.locations.map(function(attraction) { 
              return   <Marker
                        name={attraction['address']}
                        position={attraction['latLng']} />; 
            })
         }

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrrxZxajW7IfAoiZTWHymyfKXsnZhZ2Ek')
})(MapContainer)