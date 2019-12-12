import configDefault from '../config/default.json';
import configProduction from '../config/production.json';

class ConfigService {
  constructor() {
    if (process.env.NODE_ENV === 'production') {
      this.config = configProduction;
    } else {
      this.config = configDefault;
    }
  }
  
  getConfig() {
    return this.config;
  }
}

export default new ConfigService();
