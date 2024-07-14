import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  router: any;

  ngOnInit(): void {
  }

  submit() {

  }

  isMenuActive = false;

  constructor(private elementRef: ElementRef) { }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuActive = false;
    }
  }

}
