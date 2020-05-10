import { Component, OnInit } from '@angular/core';
import Store from './store/store';

@Component({
  selector: 'app-part-scanner',
  templateUrl: './part-scanner.component.html',
  styleUrls: ['./part-scanner.component.scss']
})
export class PartScannerComponent implements OnInit {

  public collapedSideBar: boolean;
  constructor() { }

  ngOnInit() {
    Store.initialize();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
