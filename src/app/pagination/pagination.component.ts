import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  workersList = [
    {
      postal: '1',
      id: '1',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '2',
      id: '2',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '3',
      id: '3',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '4',
      id: '4',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '5',
      id: '5',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '6',
      id: '6',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '7',
      id: '7',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
    {
      postal: '8',
      id: '8',
      name: 'Faritha',
      email: 'farithanoormohammed@gmail.com',
      body: 'working as Web devoloper',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
