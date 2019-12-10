import { observable } from 'mobx';

import PAGES from '../constants/pages.const';

class LayoutStore {
  @observable currentPage = PAGES.HOME;
}

export default new LayoutStore();
