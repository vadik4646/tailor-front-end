import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { AlertsService } from "../../alerts/alerts.service";
import {ServerResponse} from "../../shared/server-response";

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
  ) {
  }

  onSubmit(form: NgForm) {
    this.alertsService.setState('show');
    // this.authService.register(form.value).subscribe(
    //   (response: ServerResponse) => {
    //     this.alertsService.setResponse(response);
    //   }
    // );
  }

  onAnimateShow() {
    this.alertsService.setState('show');
  }
  onAnimateHide() {
    this.alertsService.setState('hide');
  }
  onAnimateReset() {
    this.alertsService.setState('initial');
  }

  onSubmitResponse(response) {

  }

  ngOnInit() {

  }

}
