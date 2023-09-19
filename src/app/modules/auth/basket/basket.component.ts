import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/module/cart.service';
import { Product } from '../../../shared/module/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  displayedColumns: string[] = ['name', 'price'];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() { // ฟังชันสําหรับคํานวณราคา
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
    console.log(this.totalPrice);
  }

}
