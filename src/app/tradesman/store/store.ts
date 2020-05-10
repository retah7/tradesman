import {getEndTimeStampOfToday} from '../utils/utils.js';
import {LS} from '../utils/LS';
import StoreOperation from './store-operation';

class Store {
  initializationId: number;
  tradesmanStore: any;

  constructor() {

  }

  initialize() {
    const tradesManDb = LS.get('tradesman');
    if( !tradesManDb ) {
      LS.set('tradesman', {
        initializationId: getEndTimeStampOfToday(),
        time: new Date().getTime(),
        data: {}
      });
    } else if ( tradesManDb.initializationId !== getEndTimeStampOfToday()) {
      LS.set('tradesman', {
        initializationId: getEndTimeStampOfToday(),
        time: new Date().getTime(),
        data: {}
      });
    }
    this.tradesmanStore = tradesManDb;
    console.log(this.tradesmanStore);
  }

  getIndexData(indexName, initialState) {
    this.initialize();
    if( !this.tradesmanStore.data[indexName] ) {
      this.tradesmanStore.data[indexName] = initialState;
      LS.set('tradesman', this.tradesmanStore);
    }
    return new StoreOperation(this.tradesmanStore, indexName);
  }
}

export default new Store();
