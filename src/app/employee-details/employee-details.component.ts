import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails = [
    {
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      mobile: '123456789',
    },
  ];
  constructor() {}
  backDetails() {}

  ngOnInit() {}
}
