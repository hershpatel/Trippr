import React, { Component } from 'react';
import { Collapse, Table, Tag } from 'antd';
import LocationSearchInput from './LocationSearch.js';


class PlacesGridView extends Component {
  state = {}

callback(key) {
    console.log(key);
  }
  

  render() {
    const Panel = Collapse.Panel;

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.rating - b.rating
      }];

    return (
        <div>
            {
                this.props.groups.map(function(cluster) {
                    console.log(cluster);
                    return <div><Tag color={cluster.color}>{cluster.name}</Tag>
                            <Table pagination={false} dataSource={cluster.places} columns={columns} />
                            <br></br>
                            </div>;
                            
                })
            }
        </div>
         
    );
  }
}

export default PlacesGridView;