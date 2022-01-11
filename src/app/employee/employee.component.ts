import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  ArrayValue=[10,2,3,7,9];

  constructor() { }

  ngOnInit() {
  }

}