import {LS} from '../utils/LS';

export default class StoreOperation {
  private indexName;
  private storeInstance;

  constructor(storeInstance, indexName) {
    this.storeInstance = storeInstance;
    this.indexName = indexName;
  }

  public get() {
    return this.storeInstance.data[this.indexName];
  }

  public set(data) {
    this.storeInstance.data[this.indexName] = data;
    LS.set('tradesman', this.storeInstance);
  }

  public clear() {
    delete this.storeInstance.data[this.indexName];
    LS.set('tradesman', this.storeInstance);
  }

}
