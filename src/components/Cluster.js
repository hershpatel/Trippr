import React, { Component } from 'react';
import {Layout, Content } from 'antd';
import MapContainer from './Map.js';
import AddLocationView from './AddLocation.js'


class ClusterView extends Component {
  state = {locations:[]}

  addLocation = (address, latLng) => {
    const attraction = {address, latLng};
    this.setState({ locations: [...this.state.locations, attraction] });
  }

  removeLocation = (value) => {
    console.log(value);
    console.log(this.state.locations);
    console.log("in here!");
    this.setState({locations: this.state.locations.filter(function(attraction) { 
        return attraction['address'] !== value 
    })});
  }

  addresses = () => {
    return this.state.locations.map(function(attraction) { return attraction['address']; });
  }

  render() {
    const { Header, Content, Sider } = Layout;

    return (
      <Layout style={{height:"100vh"}}>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280, textAlign: 'left'}}>
              <h2 >Seattle</h2>
              <MapContainer locations={this.state.locations}/>
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