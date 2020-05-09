import { Component, OnInit } from '@angular/core';
import {MostActiveCallFetcher} from '../../schedular/most-active-call-fetcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mostActiceCallFetcher: MostActiveCallFetcher) { }

  ngOnInit() {
    this.mostActiceCallFetcher.start();
  }

}
