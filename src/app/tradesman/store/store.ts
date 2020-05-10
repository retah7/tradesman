import {getEndTimeStampOfToday} from '../utils/utils.js';
import {LS} from '../utils/LS';

class Store {
  initializationId: number;

  constructor() {

  }

  initialize() {
    const tradesManDb = LS.get('tradesman');
    if( !tradesManDb ) {
      LS.set('tradesman', {
        initializationId: getEndTimeStampOfToday(),
        time: new Date().getTime()
      });
    } else if ( tradesManDb.initializationId !== getEndTimeStampOfToday()) {
      LS.set('tradesman', {
        initializationId: getEndTimeStampOfToday(),
        time: new Date().getTime()
      });
    }

  }
}

export default new Store();
