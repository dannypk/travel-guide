import React, { useState } from 'react';

import './destination-search-bar.less';

import destinationStore from '../stores/destination.store';
import IconSearchSvg from '../static/icon-search.svg';

// This component is a stateless component that uses react hooks
const DestinationSearchBar = () => {
  const [searchData, setSearchData] = useState('');
  
  return (
    <div className="DestinationSearchBar">
      <div className="DestinationSearchBar-wrapper">
        <input
          className="DestinationSearchBar-input"
          onChange={event => setSearchData(event.target.value)}
          onKeyPress={async (event) => {
            if (event.key === 'Enter') {
              await destinationStore.getAvailableAccommodations(searchData);
            }
          }}
          value={searchData}
          placeholder="Barcelona, Porto, New York..."
        />
        
        <IconSearchSvg className="DestinationSearchBar-searchIcon"/>
      </div>
    </div>
  );
};

export default DestinationSearchBar;