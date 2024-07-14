import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void { } isMenuActive = false; constructor(private elementRef: ElementRef) { } toggleMenu() { this.isMenuActive = !this.isMenuActive; } @HostListener('document:click', ['$event']) onClickOutside(event: Event) { if (!this.elementRef.nativeElement.contains(event.target)) { this.isMenuActive = false; } } ngAfterViewInit() { }

}
