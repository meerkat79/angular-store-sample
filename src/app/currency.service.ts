import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  private Currencies = new BehaviorSubject([]);
  private dataStore: any = {}; // store our data in memory
  readonly currencies = this.Currencies.asObservable();

  constructor(private http: HttpClient) { }

  getCurrencies() {
    return this.Currencies.asObservable();
  }

  loadCurrencies() {
    return this.http.get('http://apilayer.net/api/list?access_key=' + environment.currencyKey).subscribe(
      data => {
        this.dataStore = data;
        this.Currencies.next(Object.assign({}, this.dataStore).currencies);
      },
      error => {
        console.log('could not load currencies', error);
      });
  }

}
