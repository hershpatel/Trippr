import React, { Component } from 'react';
import {Layout, Content } from 'antd';
import MapContainer from './Map.js';
import AddLocationView from './AddLocation.js'


class ClusterView extends Component {
  state = {locations:[]}

  addLocation = (value) => {
    this.setState({ locations: [...this.state.locations, value] });
    console.log(value);
  }

  removeLocation = (value) => {
    console.log(value);
    console.log(this.state.locations);
    console.log("in here!");
    this.setState({locations: this.state.locations.filter(function(location) { 
        return location !== value 
    })});
}

  render() {
    const { Header, Content, Sider } = Layout;

    return (
      <Layout style={{height:"100vh"}}>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280, textAlign: 'left'}}>
              <h2 >Seattle</h2>
              <MapContainer/>
            </Content>
          </Layout>
          <Sider width={360} style={{ background: '#ECECEC', padding: '30px' }}>
            <AddLocationView addLocation={this.addLocation} removeLocation={this.removeLocation} locations={this.state.locations}/>
          </Sider>
        </Layout>
      </Layout>        
    );
  }
}

export default ClusterView;