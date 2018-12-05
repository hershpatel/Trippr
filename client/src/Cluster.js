import React, { Component } from 'react';
import {Layout, Content } from 'antd';


class ClusterView extends Component {
  state = {}

  render() {
    const { Header, Content, Sider } = Layout;

    return (
      <Layout style={{height:"100vh"}}>
        <Header>
          <p style={{ color: '#fff' }}>Header</p>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280, textAlign: 'left'}}>
              <h2 >Seattle</h2>
            </Content>
          </Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <p>Sider</p>
          </Sider>
        </Layout>
      </Layout>        
    );
  }
}

export default ClusterView;