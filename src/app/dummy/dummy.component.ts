import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  hello() {
    // alert('hello');
    this.controlType = this.controlType == 'text' ? 'password' : 'text';
  }
  controlType = 'text';
  hello1 = 'hello';
  
    welcome()
    {
      alert('welcome');
  

    }
   }
