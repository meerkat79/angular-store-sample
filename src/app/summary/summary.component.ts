import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { BasketService } from '../basket.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  items: [] = [];
  cost = 0;
  currencies: any = {};
  currencyList: any = [];

  from = 'USD';
  to = '';
  amount = '';
  conversion = '0';

  handleCurrencySelection = (e) => {
    this.to = e.target.innerText.slice(-3);
    console.log(this.to); // check the target currency before calling endpoint
    this.amount = this.cost.toString();

    this.httpClient.get('http://api.currencylayer.com/convert?access_key=' + environment.currencyKey +
     '&from=' + this.from + '&to=' + this.to + '&amount=' + this.amount).subscribe(val => {
       this.conversion = '4.5'; // arbitrary value to demonstrate as subscription does not allow conversion
       console.log(val);
     });

  }

  constructor(private basketService: BasketService, private currencyService: CurrencyService, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.basketService.selectedItems.subscribe((v) => {
      this.items = v;
      this.cost = 0;
    });

    this.basketService.cost.subscribe((v) => {
      this.cost = v;
    });

    this.currencies = this.currencyService.currencies;

    this.currencyService.loadCurrencies();

    this.currencies.subscribe((v) => {
      this.currencyList = v;
    });
  }

}
