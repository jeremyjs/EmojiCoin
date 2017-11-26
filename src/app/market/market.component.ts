import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  public user: any = {
    'public_address': '0x2312312323kk3'
  }

  constructor() { }

  ngOnInit() {
  }

}
