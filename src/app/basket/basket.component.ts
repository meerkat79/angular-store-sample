import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems: [] = [];
  cost = 0;

  // addCost = (val) => {
  //   this.cost = this.cost + val;
  // }

  reduceCost = (val) => {
    this.cost = this.cost - val;
    this.basketService.cost.emit(this.cost);
  }

  handleCheckout = () => {
    this.basketService.displayBasket.emit(false);
    this.router.navigate(['checkout']);
    // this is to show how we might handle routing etc. For the data
    // aspect this needs refactoring to work properly on the checkout/summary component.
    // For now I am just displaying this on the main view
  }

  handleRemoveBasketItem = (i) => {
    this.basketItems.splice(i, 1);
    this.reduceCost(i.price);
  }

  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit(): void {
    this.basketService.selectedItems.subscribe((v) => {
      this.basketItems = v;
      this.cost = 0;
    });
    this.basketService.cost.subscribe((v) => {
      this.cost = v;
    });
  }
}
