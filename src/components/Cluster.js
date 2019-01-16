import React, { Component } from 'react';
import {Layout, Content, Button } from 'antd';
import MapContainer from './Map.js';
import AddLocationView from './AddLocation.js';
import PlacesGridView from './PlacesGrid.js';


class ClusterView extends Component {
  state = {locations:[], groups: []}

  addLocation = (address, latLng) => {
    const attraction = {address, latLng};
    this.setState({ locations: [...this.state.locations, attraction] });
  }

  componentDidMount() {
    // call default function to display redux operation
    fetch("http://tripprapi.herokuapp.com/seattle", {
      mode: 'no-cors',
    })
    .then(response => response.json())
    .then(data => this.setState({locations:[], groups: data['groups'] }))
  }

  removeLocation = (value) => {
    console.log(value);
    console.log(this.state.locations);
    console.log("in here!");
    this.setState({locations: this.state.locations.filter(function(attraction) { 
        return attraction['address'] !== value 
      }), groups: this.state.groups
    });
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
              <PlacesGridView groups = {this.state.groups}/>
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