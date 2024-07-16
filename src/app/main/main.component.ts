import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SERVICES } from '../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  services = SERVICES;
  serviceTitles: string[] = [];
  constructor(private elementRef: ElementRef, private router: Router) { }



  ngOnInit(): void {
    this.serviceTitles = this.services.map(service => service.title);
  }

  isMenuActive = false;

  

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuActive = false;
    }
  }

  onServiceSelect(event: Event) {
    const selectedTitle = (event.target as HTMLSelectElement).value;
    const selectedService = this.services.find(service => service.title === selectedTitle);
    if (selectedService) {
      this.router.navigate(['/services', selectedService.id]);
    }
  }

  ngAfterViewInit() {

  }

}
