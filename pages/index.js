import "./index.less"
import React from 'react';
import Layout from '../components/layout';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className="example">Welcome to your travel guide !!</div>
      </Layout>
    );
  }
}

export default Home