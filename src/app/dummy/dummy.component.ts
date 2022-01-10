import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
  conditionApply = true;
  constructor() {}

  ngOnInit() {}
  changing() {
    if (this.conditionApply) this.conditionApply = false;
    else this.conditionApply = true;
  }
  hello() {
    // alert('hello');
    this.controlType = this.controlType == 'text' ? 'password' : 'text';
  }
  controlType = 'text';
  hello1 = 'hello';

  welcome() {
    alert('welcome');
  }
}
