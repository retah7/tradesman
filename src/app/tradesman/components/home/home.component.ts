import { Component, OnInit } from '@angular/core';
import {MostActiveCallFetcher} from '../../schedular/most-active-call-fetcher';
import {MostActivePutFetcher} from '../../schedular/most-active-put-fetcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mostActiceCallFetcher: MostActiveCallFetcher, private mostActivePutFetcher: MostActivePutFetcher) { }

  ngOnInit() {
    this.mostActiceCallFetcher.start();
    this.mostActivePutFetcher.start();
  }

}
