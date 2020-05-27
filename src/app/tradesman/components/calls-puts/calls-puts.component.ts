import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import Store from '../../store/store';
import StoreOperation from '../../store/store-operation';
import {MostActiveCallFetcher} from '../../schedular/most-active-call-fetcher';

@Component({
  selector: 'app-calls-puts',
  templateUrl: './calls-puts.component.html',
  styleUrls: ['./calls-puts.component.scss']
})
export class CallsPutsComponent implements OnInit {

  displayedColumns: string[] = ['time', 'symbol', 'strikePrice', 'volume', 'premium'];
  dataSource: any;
  dataCount: any;
  cssClassForStatus = {
    P: 'pending',
    M: 'missing',
    D: 'done'
  };

  @ViewChild(MatSort, {static: false}) set matSort(sort: MatSort) {
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };
    this.dataSource.sort = sort;
  }

  activeCallsStore: StoreOperation;

  @ViewChild(MatPaginator, {static: false}) set paginator(sort: MatPaginator) {
    this.dataSource.paginator = sort;
  }

  constructor(private mostActiveCallFetcher: MostActiveCallFetcher) { }

  ngOnInit() {
    this.subscribeOnActiveCallsLive();
    this.subscribeOnActivePutsLive();
  }

  private updateTableData(calls) {
    const data  = [].concat(...calls.map(d => {
      if (d && d.data) {
        return d.data.map(row => ({...row, time: d.time}));
      }
      else {
        return {...d, data : []};
      }
    }));
    this.dataCount = calls.length;
    this.dataSource = new MatTableDataSource(data);
  }

  private subscribeOnActiveCallsLive() {
    this.mostActiveCallFetcher.activeCallsPuts$.subscribe(res => {
      if(res) this.updateTableData(res);
    });
  }
  private subscribeOnActivePutsLive() {
    this.mostActiveCallFetcher.activeCallsPuts$.subscribe(res => {
      if(res) this.updateTableData(res);
    });
  }

}
