import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {RestClient} from '../common/rest.client';
import {config} from '../../config';


@Injectable({
  providedIn: 'root'
})
export class ActiveCallsPutsService {

  private activeCallsSource = new BehaviorSubject(null);
  public currentLease$ = this.activeCallsSource.asObservable();

  constructor( private http: RestClient ) {
  }

  changeLease(leaseData: object) {
    this.activeCallsSource.next(leaseData);
  }


  public loadLeaseDdetails(): Observable<any> {
    console.log("Inside service")
    return Observable.create((observer: Observer<any>) => {
      this.http.get(config.MOST_ACTIVE_CALLS).subscribe(response => {
        this.changeLease(response);
        observer.next(response);
        observer.complete();
      }, (err) => {
        observer.error(err);

      });
    });
  }
}
