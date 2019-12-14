import { observable } from 'mobx';

import destinationService from '../services/destination.service';

class DestinationStore {
  @observable availableAccommodations = null;
  @observable isLoadingAccommodations = false;
  
  @observable isLoadingDestinationGuides = false;
  @observable availableDestinationGuides = [];
  
  async getAvailableAccommodations(destination) {
    this.isLoadingAccommodations = true;
    this.availableAccommodations = await destinationService.getAvailableAccommodation(destination);
    this.isLoadingAccommodations = false;
  }
  
  async getAvailableDestinationGuides(destination) {
    this.isLoadingDestinationGuides = true;
    this.availableDestinationGuides = await destinationService.getAvailableDestinationGuides(destination);
    this.isLoadingDestinationGuides = false;
  }
}

export default new DestinationStore();
