import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  constructor() { }

  displayBasket = new EventEmitter<boolean>();
  selectedItems = new EventEmitter();
  cost = new EventEmitter();

}
