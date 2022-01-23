import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeGroup = [
    {
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      mobile: '123456789',
    },
    {
      name: 'Noor',
      email: 'noors4u@gmail.com',
      mobile: '123456789',
    },
    {
      name: 'Umar',
      email: 'farithanoormohammed@gmail.com',
      mobile: '123456789',
    },
  ];

  constructor() {}
  viewDetails() {}

  ngOnInit() {}
}
