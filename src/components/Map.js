import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Layer, Feature, Popup, ZoomControl } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibmdhaGxvdCIsImEiOiJjanFzZzh0eDUwdzhjM3hvMTdkNnIxbGdqIn0.9U9-UpXBuh0FX0WLF8PF_g",
  minZoom: 8,
  maxZoom: 16
});

export class MapContainer extends Component {
  state = {place:undefined,
          center: [-122.318701, 47.621188],
          };


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

  markerClick = (place) => {
    this.setState({
      place,
      center: [place['lon'],place['lat']]
    });
  }


  render() {
    const centroids = this.calculateCentroids();
    const getCirclePaint = {
      'circle-radius': 50,
      'circle-color': '#E54E52',
      'circle-opacity': 0.8
    };

    const place = this.state.place;
    const zoom = this.state.zoom;
    const center = this.state.center;
    const that = this;

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={center}
        scrollZoom={false}
        fitBounds={undefined}
        containerStyle={{
          height: 500,
          width: "50vw",
        }}>
        <ZoomControl/>
            
        {
          this.props.clusters.map(function(cluster) {
            console.log(cluster);
            return <Layer key={cluster.name} type="circle" id={cluster.name} paint={{
                      'circle-color': cluster.color,
                      'circle-stroke-width': 1,
                      'circle-stroke-color': '#fff',
                      'circle-stroke-opacity': 1
                    }}>
                        {  cluster.locations.map(function(place) {
                            console.log(place);
                              return <Feature key={place.name} 
                                              coordinates={[place['lon'],place['lat']]}
                                              onClick={that.markerClick.bind(that, place)}>
                                      </Feature>;
                            })
                        }
                    </Layer>
          })
        }
        {place && (
          <Popup key={place.name} coordinates={[place['lon'],place['lat']]} offset='center'>
              <div>{place.name}</div>
          </Popup>
        )}
        
            
          
      </Map>
    );
  }
}

export default MapContainer;