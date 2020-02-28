import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;

  showBasket = false;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {

  }

  handleBasketClick = () => {
    this.basketService.displayBasket.emit(this.showBasket = !this.showBasket);
  }

}
