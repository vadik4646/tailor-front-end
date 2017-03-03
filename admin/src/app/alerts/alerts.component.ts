import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { AlertsService } from "./alerts.service";

@Component({
  selector: 'admin-tfe-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [
    trigger('alertMessage', [
      state('initial', style({
        // transform: 'translateX(-300)'
      })),
      state('show', style({
        // transform: 'translateX(100)',
        transform: 'scale(1.2)'
      })),
      state('hide', style({
        // transform: 'translateX(200)',
        transform: 'scale(1.5)'
      })),
      transition('initial => show', animate(1000)),
      transition('show => hide', animate(800)),
    ])
  ]
})
export class AlertsComponent implements OnInit {

  constructor(public alertsService: AlertsService) {
  }

  ngOnInit() {

  }

}
