import {config, SCHEDULAR_TIMEINTERVAL} from '../../config';
import {ActiveCallsPutsService} from '../services/active-calls-puts.service';
import {Injectable} from '@angular/core';
import {saveFile} from '../utils/file-saver';
import {formatToDDMMYY, formatToHHMMSS} from '../utils/date-formatter';
import {MostActiveCallsResponse} from './most-active-calls-response';
import Store from './../store/store';
import StoreOperation from './../store/store-operation';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {RestClient} from '../common/rest.client';

@Injectable({
  providedIn: 'root'
})
export class MostActiveCallFetcher {

  fetchHistory: any;
  response: MostActiveCallsResponse;
  lastCallCompleted: any;
  continuousErrorCount: number;
  activeCallsStore: StoreOperation;

  private activeCallsSource = new BehaviorSubject(null);
  public activeCallsPuts$ = this.activeCallsSource.asObservable();

  constructor(private activeCallsPutsService: ActiveCallsPutsService, private http: RestClient) {
    this.activeCallsStore = Store.getIndexData('activeCalls', []);
    this.fetchHistory = [...this.activeCallsStore.get().map(data => data.id)];
    this.lastCallCompleted = true;
    this.continuousErrorCount = 0;
    this.activeCallsSource.next([...this.activeCallsStore.get()]);
  }

  public start() {
    setTimeout(() => this.fetch(), SCHEDULAR_TIMEINTERVAL.STANDARD);
  }

  private fetch() {
    this.lastCallCompleted = false;
    this.loadCalls().subscribe(response => {

      this.lastCallCompleted = true;
      this.continuousErrorCount = 0;
      this.processData(response);
      this.start();
    }, (e) => {
      this.lastCallCompleted = true;
      this.continuousErrorCount++;
      console.log(e);
      console.log('Error occurred: trying count', this.continuousErrorCount);
      if (this.continuousErrorCount < 5) {
        this.start();
      }
    });

  }

  private processData(response) {

    if ( this.isUniqueDataFound(response) ) {
      this.response = response;
      this.addToFetchHistory();
      // this.saveJsonFile();
      this.updateLocalObservableData();
    } else {
      console.log('======== FOUND_SAME_DATA: ACTIVE_CALLS ======== ');
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

  private updateLocalObservableData() {
    const updatedData = [...this.activeCallsStore.get(), this.response];
    this.activeCallsSource.next(updatedData);
    this.activeCallsStore.set(updatedData);
  }


  private loadCalls(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(config.MOST_ACTIVE_CALLS).subscribe(response => {
        const transformedResponse = new MostActiveCallsResponse(response);
        observer.next(transformedResponse);
        observer.complete();
      }, (err) => {
        observer.error(err);

      });
    });
  }

}
