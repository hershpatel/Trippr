import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { AutoComplete, Layout, Button } from 'antd';



 
class LocationSearchInput extends Component {
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
       <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Where to?"/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCrrxZxajW7IfAoiZTWHymyfKXsnZhZ2Ek')
})(LocationSearchInput);