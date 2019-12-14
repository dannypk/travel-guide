import React from 'react';
import { observer } from 'mobx-react';

import destinationStore from '../../stores/destination.store';

import DestinationAccommodationItem from './destination-accommodation-item';
import Spinner from '../spinner';

import './destination-accommodation-list.less';

@observer
class DestinationAccommodationList extends React.Component {
  
  renderAvailableAccommodations() {
    if (destinationStore.isLoadingAccommodations) {
      return <Spinner/>;
    }
    
    if (!destinationStore.availableAccommodations) {
      return 'In order to get results, please search for your destination!';
    }
    
    if (destinationStore.availableAccommodations.length === 0) {
      return 'For the given destination, no accommodations were found. We apologize for the inconvenience!';
    }
    
    return (
      <React.Fragment>
        <div className="DestinationAccommodationList-titleHeader">
          For your destination, we recommend the following accommodations:
        </div>
        
        <div className="DestinationAccommodationList-group">
          {destinationStore.availableAccommodations.map(availableAccommodation =>
            <DestinationAccommodationItem destinationAccommodation={availableAccommodation}/>
          )}
        </div>
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div className="DestinationAccommodationList">
        {this.renderAvailableAccommodations()}
      </div>
    );
  }
}

export default DestinationAccommodationList;