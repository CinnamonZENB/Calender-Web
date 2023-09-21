import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/module/auth.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  ProductArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string = '';
  price: string = '';
  stcode: string = '';
  date_pd: string = '';
  image: string = '';
  currentProductID = '';

  constructor(private http: HttpClient,private authService: AuthService, private router: Router) {
    this.getAllProduct();
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      // ไม่ได้เข้าสู่ระบบ ให้นำไปยังหน้า Login
      this.router.navigate(['/login']);
    }

  }
  getAllProduct() {
    this.http
      .get('http://localhost:8080/api/product/get')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ProductArray = resultData.data;
      });
  }

  register() {
    let bodyData = {
      name: this.name,
      price: this.price,
      stcode: this.stcode,
      date_pd: this.date_pd,
      image: this.image,
    };
    this.http
      .post('http://localhost:8080/api/product/add', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Employee Registered Successfully');
        this.getAllProduct();
      });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.price = data.price;
    this.stcode = data.stcode;
    this.date_pd = data.date_pd;
    this.image = data.image;
    this.currentProductID = data.id;
  }

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      price: this.price,
      stcode: this.stcode,
      date_pd: this.date_pd,
      image: this.image,
    };

    this.http
      .put(
        'http://localhost:8080/api/update' + '/' + this.currentProductID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Product Registered Updateddd');
        this.getAllProduct();
      });
  }

  UpdateStatus() {
    let bodyData = {
      stcode: this.stcode,
    };

    this.http
      .put(
        'http://localhost:8080/api/update' + '/' + this.currentProductID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Status Registered Updateddd');
        this.getAllProduct();
      });
  }

  getProduct() {
    this.http
      .get(
        'http://localhost:8080/api/product/get' + '/' + this.currentProductID
      )
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ProductArray = resultData.data;
      });
  }

  save() {
    if (this.currentProductID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  setDelete(data: any) {
    this.http
      .delete('http://localhost:8080/api/delete' + '/' + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Product Deletedddd');
        this.getAllProduct();
      });
  }
}
