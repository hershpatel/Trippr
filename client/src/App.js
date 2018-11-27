import React, { Component } from 'react';
import './App.css';
import { AutoComplete, Layout, Button } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

const locations = ["New York", "San Francisco", "Chicago"];

class App extends Component {
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

  // Fetch passwords after first mount

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
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div className="App">
        <Layout style={{height:"100vh"}}>
          <Content className="whereContent">
          <h1> Trippr </h1>
          <AutoComplete
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            placeholder="Where to?"
          />
          <br/>
          <br/>
          <Button icon="search">Lets go!</Button>
        </Content>
        </Layout>        
      </div>
      
    );
  }
}

export default App;