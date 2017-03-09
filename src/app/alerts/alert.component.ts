import { Component, OnInit, trigger, state, style, transition, animate, keyframes, Input } from '@angular/core';
import { Alert } from "./alert";

@Component({
  selector: 'admin-tfe-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('alertMessage', [
      state('initial', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 100
      })),
      state('hide', style({
        transform: 'translateX(200px)',
        opacity: 0
      })),
      state('moveTop', style({
        height: '0px',
        opacity: 0,
        padding: '0px'
      })),
      transition('initial => show', animate(
        Alert.showAnimationTime,
        keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ])
      )),
      transition('show => hide', animate(
        Alert.hideAnimationTime,
        keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ])
      )),
      transition('hide => moveTop', animate(
        Alert.moveTopAnimationTime
        // ,
        // keyframes([
        //   style({opacity: 0, height: '0px',     offset: 0}),
        //   style({opacity: 0, transform: 'translateX(-15px)', offset: 0.7}),
        //   style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        // ])
      )),
    ])
  ]
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;

  constructor() {}

  ngOnInit() {
  }

}
