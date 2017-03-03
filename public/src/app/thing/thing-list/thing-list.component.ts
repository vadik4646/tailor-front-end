import {Component, OnInit, Input} from '@angular/core';
import {Thing} from "../thing";

@Component({
  selector: 'tfe-thing-list',
  templateUrl: 'thing-list.component.html',
  styleUrls: ['thing-list.component.css']
})
export class ThingListComponent implements OnInit {
  @Input() things: Thing[];

  constructor() { }

  ngOnInit() {
  }

}
