import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './destination-accommodation-item.less';

@observer
class DestinationAccommodationItem extends React.Component {
  static propTypes = {
    destinationAccommodation: PropTypes.object.isRequired
  };
  
  renderHouseRules() {
    const { destinationAccommodation } = this.props;
    const houseRules = destinationAccommodation.house_rules || '' +
      'There are no house rules specified.';
    
    return (
      <div className="DestinationAccommodationItem-descriptionContainer">
        <label className="DestinationAccommodationItem-descriptionLabel
                          DestinationAccommodationItem-descriptionLabel--withoutWidth">House Rules:
        </label>
        <span className="DestinationAccommodationItem-descriptionText">
          {houseRules}
        </span>
      </div>
    );
  }
  
  renderPropertyType() {
    const { destinationAccommodation } = this.props;
    return (
      <div className="DestinationAccommodationItem-descriptionContainer">
        <label className="DestinationAccommodationItem-descriptionLabel">Property Type:</label>
        <span className="DestinationAccommodationItem-descriptionText">
          {destinationAccommodation.property_type} - {destinationAccommodation.room_type}
        </span>
      </div>
    );
  }
  
  renderPropertyPrice() {
    const { destinationAccommodation } = this.props;
    return (
      <div className="DestinationAccommodationItem-descriptionContainer">
        <label className="DestinationAccommodationItem-descriptionLabel">Price:</label>
        <span className="DestinationAccommodationItem-descriptionText">
          {destinationAccommodation.price} €
        </span>
      </div>
    );
  }
  
  renderNumberOfPeopleAllowed() {
    const { destinationAccommodation } = this.props;
    return (
      <div className="DestinationAccommodationItem-descriptionContainer">
        <label className="DestinationAccommodationItem-descriptionLabel">Available for:</label>
        <span className="DestinationAccommodationItem-descriptionText">
          {destinationAccommodation.accommodates} people
        </span>
      </div>
    );
  }
  
  renderReviewsScore() {
    // eslint-disable-next-line camelcase
    const { destinationAccommodation: { review_scores, reviews } } = this.props;
    return (
      <div className="DestinationAccommodationItem-descriptionContainer">
        <label className="DestinationAccommodationItem-descriptionLabel">Rating:</label>
        <span className="DestinationAccommodationItem-descriptionText">
          {review_scores.review_scores_rating} from {reviews.length} {reviews.length > 1 ? 'reviews' : 'review'}
        </span>
        
        {reviews.length > 10 &&
        <div className="DestinationAccommodationItem-recommendedBadge" title="Based on number of reviews">
          Recommended!
        </div>}
      </div>
    );
  }
  
  onDestinationAccommodationItemClick() {
    const { destinationAccommodation } = this.props;
    window.open(destinationAccommodation.listing_url, '_blank');
  }
  
  renderImagePreview() {
    const { destinationAccommodation } = this.props;
    const imageUrl = destinationAccommodation.images.picture_url;
    
    return (
      <div className="DestinationAccommodationItem-imagePreviewContainer">
        <img src={imageUrl} className="DestinationAccommodationItem-imagePreview" alt="accommodation-preview"/>
      </div>
    );
  }
  
  render() {
    
    return (
      <div className="DestinationAccommodationItem" onClick={() => this.onDestinationAccommodationItemClick()}>
        <div className="DestinationAccommodationItem-description">
          {this.renderImagePreview()}
          <div>
            {this.renderPropertyType()}
            {this.renderPropertyPrice()}
            {this.renderNumberOfPeopleAllowed()}
            {this.renderReviewsScore()}
          </div>
        </div>
        
        {this.renderHouseRules()}
      </div>
    );
  }
}

export default DestinationAccommodationItem;