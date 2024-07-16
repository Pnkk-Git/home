  import { Component, OnInit } from '@angular/core';
  import { SERVICES } from '../constants';
import { ActivatedRoute, Router } from '@angular/router';

  @Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
  })
  export class ServicesComponent implements OnInit {

    services = SERVICES;
  service: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId) {
      this.service = this.services.find(service => service.id === +serviceId);
    }
  }

  naviGateToContact(){
    this.router.navigate(["/contact-us"])
  }

  }
