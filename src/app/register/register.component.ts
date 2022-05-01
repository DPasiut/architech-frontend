import {Component, OnInit} from '@angular/core';
import {UserService} from "../userService";
import {User} from "../model";
import {ToastrService} from "ngx-toastr";

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
    private service: UserService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.user = {
      login: '',
      password: ''
    }
  }

  onSubmit() {
    const that = this;
    this.service.registerUser({
      login: this.user.login,
      password: this.user.password
    }).subscribe({
      next() {
        that.toastr.success("Success");
      },
      error(val) {
        that.toastr.error(val.error.error);
      }
    })
  }
}
