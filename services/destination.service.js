import axios from 'axios';
import configService from './config.service';

class DestinationService {
  constructor() {
    const config = configService.getConfig();
    this.travelGuideServiceUrl = config.services.travelGuideService;
  }
  
  async getAvailableAccommodation(destination) {
    const availableAccommodationResponse =
      await axios.get(`${this.travelGuideServiceUrl}/destination/available-accommodation?destination=${destination}`);
  
    return availableAccommodationResponse.data;
  }
}

export default new DestinationService();