import React, { Component } from 'react';
import '../styles/Search.css';
import { AutoComplete, Layout, Button } from 'antd';


function onSelect(value) {
  console.log('onSelect', value);
}

const locations = ["New York", "San Francisco", "Chicago"];

class SearchView extends Component {
  state = {
    dataSource: locations,
  }

  handleSearch = (value) => {
    var filtedData = locations.filter(function(item) {
        return item.toLowerCase().includes(value.toLowerCase())
      });
    this.setState({
      dataSource: filtedData
      }
    );
  }

  getContacts = () => {
    // Get the passwords and store them in state
    fetch('/api/contacts')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  handleChange = (value) => {
    this.setState({countries: value});
  };

  render() {
    const { dataSource } = this.state;
    const { Content } = Layout;
    return (
      <div className="Search">
          <Content className="whereContent">
          <h1 className="whiteText"> Trippr </h1>
          <h3 className="whiteText"> Map optimal routes around the city, everytime </h3>
          <AutoComplete
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            placeholder="Where to?"/>
            &nbsp;
          <Button icon="search">GO</Button>
        </Content>
      </div>
    );
  }
}

export default SearchView;