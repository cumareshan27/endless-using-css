import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-component.component.html',
  styleUrls: ['./svg-component.component.css']
})
export class SvgComponentComponent implements OnInit {

@Input() name:String;

  constructor() { }

get absUrl() {
  return window.location.href;
}

  ngOnInit() {
  }

}
