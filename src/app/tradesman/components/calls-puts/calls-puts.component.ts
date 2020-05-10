import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-calls-puts',
  templateUrl: './calls-puts.component.html',
  styleUrls: ['./calls-puts.component.scss']
})
export class CallsPutsComponent implements OnInit {

  displayedColumns: string[] = ['time', 'symbol', 'strikePrice', 'volume', 'premium'];
  dataSource: any;
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

  @ViewChild(MatPaginator, {static: false}) set paginator(sort: MatPaginator) {
    this.dataSource.paginator = sort;
  }

  constructor() { }

  ngOnInit() {
    const dummyData = [
      {position: 1, photo: 'https://www.asdreports.com/media/PR_5389.jpg', partNumber: 'AP-012320', status: 'D'},
      {position: 2, photo: 'https://www.asdreports.com/media/PR_5389.jpg', partNumber: 'CF-343488', status: 'M'},
      {position: 3, photo: 'https://www.asdreports.com/media/PR_5389.jpg', partNumber: 'DP-453432', status: 'P'},
      {position: 4, photo: 'https://www.asdreports.com/media/PR_5389.jpg', partNumber: 'JP-342344', status: 'M'},
      {position: 5, photo: 'https://www.asdreports.com/media/PR_5389.jpg', partNumber: 'PI-343432', status: 'D'},
    ];

    this.dataSource = new MatTableDataSource(dummyData);
  }

}
