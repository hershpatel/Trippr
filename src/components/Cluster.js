import React, { Component } from 'react';
import {Layout, Content } from 'antd';
import MapContainer from './Map.js';
import AddLocationView from './AddLocation.js'


const clusters = [
  {
    name: 'A',
    color: '#E54E52',
    locations: [
      {
          "address": "1901 Western Ave D, Seattle, WA 98101, USA",
          "lat": 47.6097235,
          "lon": -122.3431091,
          "name": "Indi Chocolate",
          "rating": 4.4
      },
      {
          "address": "1600 Pike Pl, Seattle, WA 98101, USA",
          "lat": 47.6096171,
          "lon": -122.3418651,
          "name": "Beechers Handmade Cheese",
          "rating": 4.6
      },
      {
          "address": "1530 Post Alley, Seattle, WA 98101, USA",
          "lat": 47.6095175,
          "lon": -122.3413427,
          "name": "Rachels Ginger Beer",
          "rating": 4.5
      },
      {
          "address": "1483 Alaskan Way, Seattle, WA 98101, USA",
          "lat": 47.607445,
          "lon": -122.3429996,
          "name": "Seattle Aquarium",
          "rating": 4.3
      },
      {
          "address": "1428 Post Alley, Seattle, WA 98101, USA",
          "lat": 47.6084252,
          "lon": -122.3403651,
          "name": "Gum Wall",
          "rating": 4.2
      },
      {
          "address": "1300 1st Ave, Seattle, WA 98101, USA",
          "lat": 47.60730900000001,
          "lon": -122.3381331,
          "name": "Seattle Art Museum",
          "rating": 4.5
      }
    ]
  },
  {
    name: 'B',
    color: '#000000',
    locations: [
      {
          "address": "700 4th Ave 73rd floor, Seattle, WA 98104, USA",
          "lat": 47.60445199999999,
          "lon": -122.330694,
          "name": "Columbia Sky View Observatory",
          "rating": 4.7
      },
      {
          "address": "614 1st Ave, Seattle, WA 98104, USA",
          "lat": 47.602375,
          "lon": -122.333654,
          "name": "Bill Speidel's Underground Tour",
          "rating": 4.4
      },
      {
          "address": "102 1st Ave S, Seattle, WA 98104, USA",
          "lat": 47.6015519,
          "lon": -122.3339885,
          "name": "Cow Chip Cookies",
          "rating": 4.6
      },
      {
          "address": "704 Terry Ave, Seattle, WA 98104, USA",
          "lat": 47.6069397,
          "lon": -122.3240646,
          "name": "Frye Art Museum",
          "rating": 4.6
      },
      {
          "address": "319 2nd Ave S, Seattle, WA 98104, USA",
          "lat": 47.5993865,
          "lon": -122.3320228,
          "name": "Klondike Gold Rush National Historical Park",
          "rating": 4.6
      },
      {
          "address": "1000 4th Ave, Seattle, WA 98104, USA",
          "lat": 47.6067006,
          "lon": -122.3325009,
          "name": "Seattle Public Library - Central Library",
          "rating": 4.7
      }
    ],
  },
];

const places = [
  {
    "address": "1075 Lake Washington Blvd E, Seattle, WA 98112, USA",
    "lat": 47.6290005,
    "lon": -122.2962936,
    "name": "Seattle Japanese Garden",
    "rating": 4.6
},
{
    "address": "2101 N Northlake Way, Seattle, WA 98103, USA",
    "lat": 47.6456308,
    "lon": -122.3343532,
    "name": "Gas Works Park",
    "rating": 4.7
},
{
    "address": "700 Broadway Ave E, Seattle, WA 98102, USA",
    "lat": 47.6252971,
    "lon": -122.3210437,
    "name": "Roy Street Coffee & Tea",
    "rating": 4.5
},
{
  "address": "5420 Ballard Ave NW, Seattle, WA 98107, USA",
  "lat": 47.6682548,
  "lon": -122.3855453,
  "name": "Salt and Straw",
  "rating": 4.7
},
{
  "address": "1010 E Union St, Seattle, WA 98122, USA",
  "lat": 47.6130487,
  "lon": -122.3191258,
  "name": "Frankie & Jo's",
  "rating": 4.7
},
{
  "address": "1521 10th Ave, Seattle, WA 98122, USA",
  "lat": 47.6146611,
  "lon": -122.3198489,
  "name": "The Elliot Bay Book Company",
  "rating": 4.8
},
{
  "address": "CenturyLink Plaza, 1600 7th Ave #105, Seattle, WA 98101, USA",
  "lat": 47.6134003,
  "lon": -122.3347638,
  "name": "Anchorhead Coffee",
  "rating": 4.6
},
{
  "address": "1124 Pike St, Seattle, WA 98101, USA",
  "lat": 47.614025,
  "lon": -122.3282469,
  "name": "Starbucks Reserve Roastery",
  "rating": 4.6
},
{
  "address": "2110 N 55th St, Seattle, WA 98103, USA",
  "lat": 47.6688027,
  "lon": -122.3332571,
  "name": "Mighty-O's Donuts",
  "rating": 4.7
},
{
  "address": "305 Harrison St, Seattle, WA 98109, USA",
  "lat": 47.6219469,
  "lon": -122.3517456,
  "name": "Seattle Center",
  "rating": 4.5
},
{
  "address": "325 5th Ave N, Seattle, WA 98109, USA",
  "lat": 47.6214824,
  "lon": -122.3481245,
  "name": "Museum of Pop Culture",
  "rating": 4.5
},
{
  "address": "305 Harrison St, Seattle, WA 98109, USA",
  "lat": 47.620563,
  "lon": -122.350466,
  "name": "Chihuly Garden and Glass",
  "rating": 4.7
},
{
  "address": "200 2nd Ave N, Seattle, WA 98109, USA",
  "lat": 47.6197393,
  "lon": -122.3510924,
  "name": "Pacific Science Center",
  "rating": 4.5
},
{
  "address": "2131 7th Ave, Seattle, WA 98121, USA",
  "lat": 47.6161953,
  "lon": -122.3399624,
  "name": "Amazon Go Store",
  "rating": 4.7
},
{
  "address": "2111 7th Ave, Seattle, WA 98121, USA",
  "lat": 47.61548,
  "lon": -122.3397907,
  "name": "Amazon Spheres",
  "rating": 4.6
},
{
  "address": "2207, 3613 4th Ave S, Seattle, WA 98134, United States",
  "lat": 47.57119669999999,
  "lon": -122.3295747,
  "name": "Bill & Melinda Gates Foundation",
  "rating": 1.3
},
{
  "address": "700 4th Ave 73rd floor, Seattle, WA 98104, USA",
  "lat": 47.60445199999999,
  "lon": -122.330694,
  "name": "Columbia Sky View Observatory",
  "rating": 4.7
},
{
  "address": "614 1st Ave, Seattle, WA 98104, USA",
  "lat": 47.602375,
  "lon": -122.333654,
  "name": "Bill Speidel's Underground Tour",
  "rating": 4.4
},
{
  "address": "102 1st Ave S, Seattle, WA 98104, USA",
  "lat": 47.6015519,
  "lon": -122.3339885,
  "name": "Cow Chip Cookies",
  "rating": 4.6
},
{
  "address": "704 Terry Ave, Seattle, WA 98104, USA",
  "lat": 47.6069397,
  "lon": -122.3240646,
  "name": "Frye Art Museum",
  "rating": 4.6
},
{
  "address": "319 2nd Ave S, Seattle, WA 98104, USA",
  "lat": 47.5993865,
  "lon": -122.3320228,
  "name": "Klondike Gold Rush National Historical Park",
  "rating": 4.6
},
{
  "address": "1000 4th Ave, Seattle, WA 98104, USA",
  "lat": 47.6067006,
  "lon": -122.3325009,
  "name": "Seattle Public Library - Central Library",
  "rating": 4.7
},
{
  "address": "1901 Western Ave D, Seattle, WA 98101, USA",
  "lat": 47.6097235,
  "lon": -122.3431091,
  "name": "Indi Chocolate",
  "rating": 4.4
},
{
  "address": "1600 Pike Pl, Seattle, WA 98101, USA",
  "lat": 47.6096171,
  "lon": -122.3418651,
  "name": "Beechers Handmade Cheese",
  "rating": 4.6
},
{
  "address": "1530 Post Alley, Seattle, WA 98101, USA",
  "lat": 47.6095175,
  "lon": -122.3413427,
  "name": "Rachels Ginger Beer",
  "rating": 4.5
},
{
  "address": "1483 Alaskan Way, Seattle, WA 98101, USA",
  "lat": 47.607445,
  "lon": -122.3429996,
  "name": "Seattle Aquarium",
  "rating": 4.3
},
{
  "address": "1428 Post Alley, Seattle, WA 98101, USA",
  "lat": 47.6084252,
  "lon": -122.3403651,
  "name": "Gum Wall",
  "rating": 4.2
},
{
  "address": "1300 1st Ave, Seattle, WA 98101, USA",
  "lat": 47.60730900000001,
  "lon": -122.3381331,
  "name": "Seattle Art Museum",
  "rating": 4.5
}
];


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
              <MapContainer locations={this.state.locations} clusters = {clusters} places={places}/>
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