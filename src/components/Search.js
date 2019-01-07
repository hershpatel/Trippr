import React, { Component } from 'react';
import '../styles/Search.css';
import { AutoComplete, Layout, Button } from 'antd';

const locations = ["New York", "San Francisco", "Chicago"];

class SearchView extends Component {
  state = {
    dataSource: locations,
    isGoDisabled: true
  }

  handleSearch = (value) => {
    var filtedData = locations.filter(function(item) {
        return item.toLowerCase().includes(value.toLowerCase())
      });
    let isGoDisabled = !(filtedData.length === 1 && filtedData[0].toLowerCase() === value.toLowerCase());
    console.log(filtedData);
    this.setState({
      dataSource: filtedData,
      isGoDisabled
    });
  }

  onSelect = (value) => {
    console.log('onSelect', value);
    this.setState({
      dataSource: [value],
      isGoDisabled: false
    });
  }

  getContacts = () => {
    // Get the passwords and store them in state
    fetch('/api/contacts')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

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
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="Where to?"/>
            &nbsp;
          <Button 
          icon="search"
          disabled={this.state.isGoDisabled}>
          GO
          </Button>
        </Content>
      </div>
    );
  }
}

export default SearchView;