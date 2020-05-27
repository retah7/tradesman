import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-tab-data',
  templateUrl: './tab-data.component.html',
  styleUrls: ['./tab-data.component.scss']
})
export class TabDataComponent implements OnInit {
  displayedColumns: string[] = ['time', 'symbol', 'strikePrice', 'volume', 'premium'];
  dataSource: any;
  dataCount: any;

  @Input() key: any;
  @Input() data: any = [];

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
    this.updateTableData(this.data);
  }

  private updateTableData(callsPuts) {
    const data  = [].concat(...callsPuts.map(d => {
      if (d && d.data) {
        return d.data.map(row => ({...row, time: d.time}));
      }
      else {
        return {...d, data : []};
      }
    }));
    this.dataCount = callsPuts.length;
    this.dataSource = new MatTableDataSource(data);
  }

}
