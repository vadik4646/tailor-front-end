import { Injectable } from '@angular/core';
import {ServerResponse} from "../shared/server-response";

@Injectable()
export class AlertsService {
  message: string = '';
  type: string = 'danger';
  state: string = 'initial';
  response: ServerResponse;

  constructor() { }

  setState(state) {
    this.state = state;
  }

  setResponse(response: ServerResponse) {
    this.response = response;
    return this;
  }

  setType(type: string) {
    this.type = type;
    return this;
  }

  setMessage(message: string) {
    this.message = message;
    return this;
  }

  showValidation() {
    if (this.type === 'success' && this.message) {
      this.setMessage(this.message);
      return this.show();
    }

    if (this.response.hasOwnProperty('validatorMessages') && this.response.validatorMessages.length > 0) {
      this.message = this.handleValidatorMessages();
      return this;
    }
  }

  private handleValidatorMessages() {
    let finalMessages = [];
    let messagesGroups = this.response.validatorMessages;

    for (let groupName in messagesGroups) {
      for (let i = 0; i < messagesGroups[groupName].length; i++) {
        finalMessages.push(messagesGroups[groupName][i]);
      }
    }

    return finalMessages.join('<br/>');
  }

  show() {

    return this;
  }

}
