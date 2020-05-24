import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import Store from '../../store/store';
import StoreOperation from '../../store/store-operation';

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
  activeCallsStore: StoreOperation;

  @ViewChild(MatSort, {static: false}) set matSort(sort: MatSort) {
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator, {static: false}) set paginator(sort: MatPaginator) {
    this.dataSource.paginator = sort;
  }

  constructor() { }

  ngOnInit() {
    this.activeCallsStore = Store.getIndexData('activeCalls', []);
    const data  = [].concat(...this.activeCallsStore.get().map(d => {
      if(d && d.data) return d.data.map(row => ({...row, time: d.time}));
      else return {...d, data : []};
    }));
    console.log(data);
    this.dataCount = this.activeCallsStore.get().length;
    this.dataSource = new MatTableDataSource(data);
  }

}
