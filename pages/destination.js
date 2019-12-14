import React from 'react';
import { observer } from 'mobx-react';
import Layout from '../components/layout';

import DestinationAccommodationList from '../components/destination-accomodation/destination-accommodation-list';

import './destination.less';

@observer
class DestinationPage extends React.Component {
  
  render() {
    return (
      <Layout>
        <div className="DestinationPage"/>
        <DestinationAccommodationList />
      </Layout>
    );
  }
}

export default DestinationPage;