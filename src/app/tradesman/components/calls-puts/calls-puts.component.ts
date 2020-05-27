import {Component, OnInit} from '@angular/core';
import {MostActiveCallFetcher} from '../../schedular/most-active-call-fetcher';

@Component({
  selector: 'app-calls-puts',
  templateUrl: './calls-puts.component.html',
  styleUrls: ['./calls-puts.component.scss']
})
export class CallsPutsComponent implements OnInit {
  calls: any;
  puts: any;

  constructor(private mostActiveCallFetcher: MostActiveCallFetcher) { }

  ngOnInit() {
    this.subscribeOnActiveCallsLive();
    this.subscribeOnActivePutsLive();
  }


  private subscribeOnActiveCallsLive() {
    this.mostActiveCallFetcher.activeCallsPuts$.subscribe(res => {
      if(res) this.calls = res;
    });
  }
  private subscribeOnActivePutsLive() {
    this.mostActiveCallFetcher.activeCallsPuts$.subscribe(res => {
      if(res) this.puts = res;
    });
  }

}
