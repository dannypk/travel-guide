import { observable } from 'mobx';

import destinationService from '../services/destination.service';

class DestinationStore {
  @observable availableAccommodations = [];
  @observable isLoadingAccommodations = false;
  
  async getAvailableAccommodations(destination) {
    this.isLoadingAccommodations = true;
    this.availableAccommodations = await destinationService.getAvailableAccommodation(destination);
    this.isLoadingAccommodations = false;
  }
}

export default new DestinationStore();
