import {Component, OnInit} from '@angular/core';
import {Service} from "../service";
import {User} from "../model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;
  loginPattern = "[0-9a-zA-Z]{5,}";
  passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";

  constructor(
    private service: Service
  ) {
  }

  ngOnInit() {
    this.user = {
      login: '',
      password: ''
    }
  }

  onSubmit() {
    this.service.registerUser({
      login: this.user.login,
      password: this.user.password
    }).subscribe({
      next() {
        alert("Register success");
      },
      error(val) {
        alert(val.error.error);
      }
    })
  }
}
