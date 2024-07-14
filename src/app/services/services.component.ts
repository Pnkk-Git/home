import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.services = SERVICES;
  }

}
