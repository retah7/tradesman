import {SCHEDULAR_TIMEINTERVAL} from '../../config';
import {ActiveCallsPutsService} from '../services/active-calls-puts.service';
import {Injectable} from '@angular/core';
import {saveFile} from '../utils/file-saver';
import {formatToDDMMYY, formatToHHMMSS} from '../utils/date-formatter';

@Injectable({
  providedIn: 'root'
})
export class MostActiveCallFetcher {

  fetchHistory: [];
  response: {};
  refreshIntervalId: any;
  lastCallCompleted: any;
  contineousErrorCount: number;
  fetchLog: [];

  constructor(private activeCallsPutsService: ActiveCallsPutsService) {
    this.fetchHistory = [];
    this.response = {
      id: null,
      data: null
    };
    this.lastCallCompleted = true;
    this.contineousErrorCount = 0;
    this.fetchLog = [];
  }

  public start() {
    setTimeout(() => {
      console.log("setTimeout");
      this.fetch();
    }, SCHEDULAR_TIMEINTERVAL.MOST_ACTIVE_CALLS);
  }

  private fetch() {
    console.log(this.fetchHistory);
    console.log("Last call completed, making new one");
    this.lastCallCompleted = false;
    this.activeCallsPutsService.loadLeaseDdetails().subscribe(response => {
      this.lastCallCompleted = true;
      this.contineousErrorCount = 0;
      console.log('is interval running', this.refreshIntervalId);
      this.setResponse(response);

      this.addToFetchHistory();
      // this.saveJsonFile();
      this.start();
    }, () => {
      this.lastCallCompleted = true;
      this.contineousErrorCount++;
      console.log('Error occured: trying count', this.contineousErrorCount);
      if( this.contineousErrorCount < 5 ) {
        this.start();
      } ek
    });

  }

  private isSameData() {

  }

  private saveJsonFile() {
    const fileName = 'Most_Active_Calls_' + formatToDDMMYY(this.response.dateObj) + formatToHHMMSS(this.response.dateObj) + '.json';
    saveFile(JSON.stringify(this.response.data), fileName, "application/json");
  }

  private setResponse(response) {
    console.log(response);
    this.response = {
      ...response,
      id: new Date(response.time).getTime(),
      dateObj: new Date(response.time)
    };

  }

  private getResponse() {
    return this.response;
  }

  private getResponseId(): any {
    return this.response.id;
  }

  addFetchLog(msg, status) {
    this.fetchLog.push[{count: this.fetchLog.length + 1, msg: msg, status: status}];
  }

  private addToFetchHistory() {
    this.fetchHistory.push(this.getResponseId());
  }

}
