import {Component, OnInit} from '@angular/core';
import { AlertsService } from "./alerts.service";
import { Alert } from "./alert";

@Component({
  selector: 'admin-tfe-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {
  alerts: Alert[];

  constructor(private alertsService: AlertsService) {}

  ngOnInit() {
    this.alerts = this.alertsService.getAlerts();
  }

}
