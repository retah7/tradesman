import { Component, OnInit } from '@angular/core';
import {MostActiveCallFetcher} from '../../schedular/most-active-call-fetcher';
import {MostActivePutFetcher} from '../../schedular/most-active-put-fetcher';
import Store from './../../store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mostActiveCallFetcher: MostActiveCallFetcher, private mostActivePutFetcher: MostActivePutFetcher) { }

  ngOnInit() {
    Store.initialize();
    this.mostActiveCallFetcher.start();
    this.mostActivePutFetcher.start();
  }

}
