import React, { Component } from 'react';
import { Card, Input, List } from 'antd';
import LocationSearchInput from './LocationSearch.js';


class AddLocationView extends Component {
  state = {}

  render() {
    const Search = Input.Search;
    return (
            <Card
              title="Add a location"
              style={{ width: 300, textAlign: 'left' }}>

              <LocationSearchInput addLocation={this.props.addLocation}/>
              {/* <br/>
              <List
                locale={{emptyText: 'Tell us where you want to go!'}}
                dataSource={this.props.locations}
                renderItem={item => (
                    <List.Item actions={[<a onClick={() => this.props.removeLocation(item)}>remove</a>]}>
                        {item}
                    </List.Item>
                  )}
              /> */}
            </Card>
    );
  }
}

export default AddLocationView;