import React, { Component } from 'react';
import {Layout, Content, Button } from 'antd';
import MapContainer from './Map.js';
import AddLocationView from './AddLocation.js';
import PlacesGridView from './PlacesGrid.js';
import axios from "axios";



class ClusterView extends Component {
  state = {locations:[], groups: []}

  addLocation = (address, latLng) => {
    const attraction = {address, "coord": [latLng["lng"],latLng["lat"]],"lat":latLng["lat"],"lon":latLng["lng"],"name":"user added input","rating":4.4};
    var groups = this.state.groups;
    groups[0]['places'].push(attraction);
    this.setState({locations:[], groups})
    this.saveChanges();
  }

  componentDidMount() {
    // call default function to display redux operation
    fetch("https://tripprapi.herokuapp.com/trips?_id=" + this.props.match.params.tripId)
    .then(response => response.json())
    .then(data => this.setState({locations:[], groups: data['groups'] }))
  }

  saveChanges = () => {
    console.log("in save");
    const postObject = {_id:this.props.match.params.tripId, groups: this.state.groups};
    fetch('https://tripprapi.herokuapp.com/trips', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postObject)
    })
  }

  deleteLocation = (value) => { 
    var groups = this.state.groups;
    for(let i = 0; i < groups.length; i++) {
      var group = groups[i];
      var places = group['places'].filter(function(place) { 
        return place['address'] != value;
      });
      group.places = places;
      groups[i] = group;
    }
    this.setState({locations:[], groups})
    this.saveChanges();
  }

  addresses = () => {
    return this.state.locations.map(function(attraction) { return attraction['address']; });
  }

  render() {
    const { Header, Content, Sider } = Layout;
    const ButtonGroup = Button.Group;

    return (
      <Layout style={{height:"100%"}}>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280, textAlign: 'left'}}>
              <h2 >{this.props.match.params.city}</h2>
              <MapContainer locations={this.state.locations} groups = {this.state.groups}/>
              <br></br>
              <div>
                <h2 style={{float: "left"}}>Schedule View</h2>
                <p style={{float: "right"}}> EXPORT TO: &nbsp;&nbsp;&nbsp;
                  <ButtonGroup >
                    <Button>Google Maps</Button>
                    <Button>Excel</Button>
                  </ButtonGroup>
                </p>
                <h2 style={{clear:"both"}}/>
              </div>
              <PlacesGridView groups = {this.state.groups} deleteLocation = {this.deleteLocation}/>
            </Content>
          </Layout>
          <Sider width={360} style={{ background: '#ECECEC', padding: '30px' }}>
            <AddLocationView addLocation={this.addLocation} removeLocation={this.removeLocation} locations={this.addresses()}/>
          </Sider>
        </Layout>
      </Layout>        
    );
  }
}

export default ClusterView;