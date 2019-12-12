import React from 'react';
import { observer } from 'mobx-react';
import Microlink from '@microlink/react';
import Layout from '../components/layout';

import destinationStore from '../stores/destination.store';

import './destination.less';

@observer
class DestinationPage extends React.Component {
  renderAvailableAccommodations() {
    if (destinationStore.isLoadingAccommodations) {
      return null;
    }
    
    return (
      <div>
        {destinationStore.availableAccommodations.map(availableAccommodation =>
          <div>
            <Microlink url={availableAccommodation.images.picture_url} media="logo" size="small"/>
          </div>
        )}
      </div>
    );
  }
  
  render() {
    return (
      <Layout>
        <div className="DestinationPage"/>
        {this.renderAvailableAccommodations()}
      </Layout>
    );
  }
}

export default DestinationPage;