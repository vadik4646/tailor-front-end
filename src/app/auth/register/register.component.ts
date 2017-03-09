import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { AlertsService } from "../../alerts/alerts.service";

@Component({
  selector: 'admin-tfe-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [ AuthService ]
})

export class RegisterComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor(
    private authService: AuthService,
    private alertsService: AlertsService,
  ) { }


  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe(
      (response) => {
        this.alertsService.setResponse(response.json()).show();
      }
    );
  }

  ngOnInit() {
  }

}
