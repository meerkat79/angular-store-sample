import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayBasket: boolean;
  constructor(private basketService: BasketService) {
    this.basketService.displayBasket.subscribe((v: boolean) => {
      this.displayBasket = v;
    });
  }

  ngOnInit() {}

}
