import {SCHEDULAR_TIMEINTERVAL} from '../../config';
import {ActiveCallsPutsService} from '../services/active-calls-puts.service';
import {Injectable} from '@angular/core';
import {saveFile} from '../utils/file-saver';
import {formatToDDMMYY, formatToHHMMSS} from '../utils/date-formatter';
import {MostActiveCallsResponse} from './most-active-calls-response';
import Store from './../store/store';
import StoreOperation from './../store/store-operation';

@Injectable({
  providedIn: 'root'
})
export class MostActiveCallFetcher {

  fetchHistory: any;
  response: MostActiveCallsResponse;
  lastCallCompleted: any;
  continuousErrorCount: number;
  activeCallsStore: StoreOperation;

  constructor(private activeCallsPutsService: ActiveCallsPutsService) {
    this.activeCallsStore = Store.getIndexData('activeCalls', []);
    this.fetchHistory = [...this.activeCallsStore.get().map(data => data.id)];
    this.lastCallCompleted = true;
    this.continuousErrorCount = 0;
  }

  public start() {
    setTimeout(() => {
      console.log('setTimeout');
      this.fetch();
    }, SCHEDULAR_TIMEINTERVAL.MOST_ACTIVE_CALLS);
  }

  private fetch() {
    // console.log(this.fetchHistory);
    // console.log('Last call completed, making new one');
    this.lastCallCompleted = false;
    this.activeCallsPutsService.loadCalls().subscribe(response => {

      this.lastCallCompleted = true;
      this.continuousErrorCount = 0;
      this.processData(response);
      this.start();
    }, () => {
      this.lastCallCompleted = true;
      this.continuousErrorCount++;
      console.log('Error occurred: trying count', this.continuousErrorCount);
      if (this.continuousErrorCount < 5) {
        this.start();
      }
    });

  }

  private processData(response) {
    const transformedResponse = new MostActiveCallsResponse(response);
    if ( this.isUniqueDataFound(transformedResponse) ) {
      console.log('tran.ID', transformedResponse.id);
      this.response = transformedResponse;
      // Store.
      this.addToFetchHistory();
      // this.saveJsonFile();
      this.activeCallsStore.set([...this.activeCallsStore.get(), this.response]);
    } else {
      console.log('Found same data');
    }
  }

  private isUniqueDataFound(response) {
    return this.fetchHistory.indexOf(response.id) === -1;
  }

  private saveJsonFile() {
    const fileName = 'Most_Active_Calls_' + formatToDDMMYY(this.response.dateObj) + formatToHHMMSS(this.response.dateObj) + '.json';
    saveFile(JSON.stringify(this.response.data), fileName, 'application/json');
  }

  private getResponse() {
    return this.response;
  }

  private getResponseId(): any {
    return this.response.id;
  }

  private addToFetchHistory() {
    this.fetchHistory.push(this.response.id);
  }

}
