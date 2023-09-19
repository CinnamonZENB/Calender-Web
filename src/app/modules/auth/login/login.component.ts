import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/module/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // AccountArray: any[] = [];
  // isResultLoaded = false;
  // isUpdateFormActive = false;

  mail: string = '';
  password: string = '';
  // st_user: string = '';
  // currentAccountID = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    // this.getAllAccount();
  }

  // getAllAccount() {
  //   this.http
  //     .get('http://localhost:8000/api/account/get')
  //     .subscribe((resultData: any) => {
  //       this.isResultLoaded = true;
  //       console.log(resultData.data);
  //       this.AccountArray = resultData.data;
  //     });
  // }

  ngOnInit() {
    this.authService.login();
  }

  // Add a method to handle form submission
  onSubmit() {
    const formData = {
      mail: this.mail, // Replace with your actual username input field value
      password: this.password, // Replace with your actual password input field value
    };

    console.log('Email:', formData.mail);
    console.log('Password:', formData.password);

    this.http.post('http://localhost:8000/api/login', formData).subscribe(
      (response: any) => {
        if (response.status === true) {
          // Login successful, handle it accordingly (e.g., redirect)
          this.router.navigate(['/home']);
          console.log('Login successful');

           this.authService.login();
        } else {
          // Login failed, display an error message to the user
          console.log('Login failed: ' + response.message);
        }
      },
      (error) => {
        console.error('Login error:', error);
        // Handle the error, e.g., display an error message to the user.
      }
    );
  }
}
