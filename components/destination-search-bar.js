import React, { useState } from 'react';

import './destination-search-bar.less';

const DestinationSearchBar = () => {
  const [searchData, setSearchData] = useState('');
  
  return (
    <div className="DestinationSearchBar">
      <input
        className="DestinationSearchBar-input"
        onChange={event => setSearchData(event.target.value)}
        value={searchData}
        placeholder="Singapore, Bangkok, San Francisco..."
      />
    </div>
  );
};

export default DestinationSearchBar;