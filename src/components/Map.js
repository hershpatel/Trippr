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



  markerClick = (place) => {
    this.setState({
      place,
      center: [place['lon'],place['lat']]
    });
  }


  render() {
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
          this.props.groups.map(function(cluster) {
            console.log(cluster);
            return <Layer key={cluster.name} type="circle" id={cluster.name} paint={{
                      'circle-color': cluster.color,
                      'circle-stroke-width': 1,
                      'circle-stroke-color': '#fff',
                      'circle-stroke-opacity': 1
                    }}>
                        {  cluster.places.map(function(place) {
                            console.log(place);
                              return <Feature key={place.name} 
                                              coordinates={place.coord}
                                              onClick={that.markerClick.bind(that, place)}>
                                      </Feature>;
                            })
                        }
                    </Layer>
          })
        }
        {place && (
          <Popup key={place.name} coordinates={place.coord} offset='center'>
              <div>{place.name}</div>
          </Popup>
        )}  
          
      </Map>
    );
  }
}

export default MapContainer;