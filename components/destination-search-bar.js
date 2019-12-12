import React, { useState } from 'react';

import './destination-search-bar.less';

import destinationStore from '../stores/destination.store';

const DestinationSearchBar = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <div className="DestinationSearchBar">
      <input
        className="DestinationSearchBar-input"
        onChange={event => setSearchData(event.target.value)}
        onKeyPress={async (event) => {
          if (event.key === 'Enter') {
            await destinationStore.getAvailableAccommodations(searchData);
          }
        }}
        value={searchData}
        placeholder="Singapore, Bangkok, San Francisco..."
      />
    </div>
  );
};

export default DestinationSearchBar;