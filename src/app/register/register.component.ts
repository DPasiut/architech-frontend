import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Service} from "../service";
import {User} from "../model";
import {NgForm} from "@angular/forms";
import {catchError} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login!: string;
  password!: string;

  constructor(
    private service: Service,
    // private toastr: ToastrService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.registerUser({
      login: this.login,
      password: this.password
    }).subscribe({
      next(val) {
        console.log("Success");
      },
      error(val) {
        console.log(val.error.error);
      }
    })
    console.log("submit end");
  }
}
