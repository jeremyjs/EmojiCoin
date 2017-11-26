import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {

  public user: any = {
    'public_address': '0x2312312323kk3'
  }

  constructor() { }

  ngOnInit() {
  }

}
