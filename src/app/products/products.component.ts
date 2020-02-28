import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  mockItems: Product[] = [
    {
      id: 1,
      label: 'Tin of soup',
      price: 0.65,
      img: {
        name: 'a tin of soup',
        path: '../../assets/soup.jpg'
      }
    },
    {
      id: 2,
      label: 'Loaf of bread',
      price: 0.8,
      img: {
        name: 'a loaf of bread',
        path: '../../assets/bread.jpg'
      }
    },
    {
      id: 3,
      label: 'Bottle of milk',
      price: 1.15,
      img: {
        name: 'a bottle of milk',
        path: '../../assets/milk.jpg'
      }
    },
    {
      id: 4,
      label: 'Bag of apples',
      price: 1.00,
      img: {
        name: 'a bag of apples',
        path: '../../assets/apples.jpg'
      }
    }
  ];

  selectedItems: Product[] = [];

  cost = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  handleAddItem = (e) => {
    this.selectedItems.push(e);
    this.basketService.selectedItems.emit(this.selectedItems);
    this.cost = this.cost + e.price;
    this.basketService.cost.emit(this.cost);
  }

}
