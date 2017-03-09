import { Injectable } from '@angular/core';
import { ServerResponse } from "../shared";
import { Alert } from "./alert";

@Injectable()
export class AlertsService {
  private alerts: Alert[] = [];
  private stack: Alert = new Alert();

  constructor() { }

  getAlerts(){
    return this.alerts;
  }

  setState(state) {
    this.stack.state = state;
    return this;
  }

  setType(type: string) {
    this.stack.type = type;
    return this;
  }

  setMessage(message: string) {
    this.stack.message = message;
    return this;
  }

  setResponse(response) {
    if (response.hasOwnProperty('validationErrors') && Object.keys(response.validationErrors).length > 0) {
      this.stack.message = this.handleValidatorMessages(response);
    } else {
      this.stack.message = response.message;
    }

    this.stack.type = response.type;
    return this;
  }

  show() {
    let newAlert = new Alert(
      this.stack.type,
      this.stack.message,
      this.stack.state
    );
    this.alerts.push(newAlert);
    this.initAnimations(newAlert);

    this.stack = new Alert();
    return this;
  }

  initAnimations(alert) {
    this.changeState(alert, 'show');
    this.changeState(alert, 'hide', Alert.lifeTime);
    this.changeState(alert, 'moveTop', Alert.hideTime);
    this.removeAlert(alert, Alert.removeTime);
  }

  private changeState(alert, state, timeout = 0) {
    setTimeout(
      () => this.alerts[this.alerts.indexOf(alert)].state = state,
      timeout
    );
  }

  private removeAlert(alert, timeout) {
    setTimeout(
      () => this.alerts.splice(this.alerts.indexOf(alert), 1),
      timeout
    );
  }

  private handleValidatorMessages(response: ServerResponse) {
    let finalMessages = [];
    let messagesGroups = response.validationErrors;

    for (let groupName in messagesGroups) {
      for (let i = 0; i < messagesGroups[groupName].length; i++) {
        finalMessages.push(messagesGroups[groupName][i]);
      }
    }

    return finalMessages.join('<br/>');
  }
}
