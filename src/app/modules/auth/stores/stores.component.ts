import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../../../shared/module/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  stcode: string;
  date_pd: string | null;
  image: string;
}

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  ProductArray: Product[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  cartItems: Product[] = [];
  clickCount = 0;

  name = '';
  price = '';
  stcode = '';
  date_pd = '';
  image = '';
  currentProductID = '';

  constructor(private http: HttpClient,private cartService: CartService) {
    const cartItems = this.cartService.getCartItems();
    console.log('Cart Items:', cartItems);
  }

  ngOnInit() {
    this.loadProducts();

  }

  loadProducts() {
    this.http
        .get("http://localhost:8000/api/product/get")
        .subscribe((resultData: any) => {
            this.isResultLoaded = true;
            console.log(resultData.data);
            this.ProductArray = resultData.data;
        });
  }

  // addToCart(product: any) {
  //   console.log('Product data', product);
  //   this.cartItems.push(product);
  // }

  addToCart(product: Product) {
    console.log('Product data', product);
    this.cartService.addToCart(product); // เพิ่มสินค้าลงในตะกร้าผ่าน cartService
  }

  getSeverity (product: Product): "success" | "warning" | "danger" | undefined {
    switch (product.stcode) {
        case 'OPEN_SELL':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'CLOSED_SELL':
            return 'danger';
        default:
            return undefined;
    }
  }

}





