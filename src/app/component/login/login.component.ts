import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const email = this.email;
    const password = this.password;

    if (this.userService.validateUser(email, password)) {
      this.router.navigate(['/home']); // Chuyển hướng đến trang chủ
      // Perform actions on successful login, e.g., redirect to another page
    } else {
     alert("Email hoặc mật khẩu không đúng")
     this.email = ""
     this.password = ""
    }
  }
}
