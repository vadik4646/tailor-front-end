import {Component, OnInit, Input} from '@angular/core';
import { Thing } from "../thing";

@Component({
  selector: 'tfe-thing-details',
  templateUrl: 'thing-details.component.html',
  styleUrls: ['thing-details.component.css']
})
export class ThingDetailsComponent implements OnInit {
  @Input() thing: Thing;

  constructor() { }

  ngOnInit() {
  }

}
