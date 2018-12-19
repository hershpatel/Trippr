import React, { Component } from 'react';
import { Card, Input, List } from 'antd';
import LocationSearchInput from './LocationSearch.js';


class AddLocationView extends Component {
  state = {locations:[]}

  addLocation = (value) => {
    this.setState({ locations: [...this.state.locations, value] });
    console.log(value);
  }

  removeLocation(value) {
    this.setState({locations: this.state.locations.filter(function(location) { 
        return location !== value 
    })});
}


  render() {
    const Search = Input.Search;
    return (
            <Card
              title="Add a location"
              style={{ width: 300, textAlign: 'left' }}>

              <LocationSearchInput addLocation={this.addLocation}/>
              <br/>
              <List
                locale={{emptyText: 'Tell us where you want to go!'}}
                dataSource={this.state.locations}
                renderItem={item => (
                    <List.Item actions={[<a onClick={() => this.removeLocation(item)}>remove</a>]}>
                        {item}
                    </List.Item>
                  )}
              />
            </Card>
    );
  }
}

export default AddLocationView;