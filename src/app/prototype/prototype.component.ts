import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SERVICES } from '../constants';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

  @ViewChild('container') container!: ElementRef;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentLetter = 'A';
  services: any[] = [];

  constructor(private readonly dialog: MatDialog) { 
    this.services = SERVICES;
  }

  ngAfterViewInit() {
    this.container.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  scrollToLetter(letter: string) {
    const card = document.getElementById(`card-${letter}`);
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  onScroll() {
    const scrollPosition = this.container.nativeElement.scrollLeft;
    const cardWidth = 320; // 300px card width + 20px margin
    const currentLetterIndex = Math.floor(scrollPosition / cardWidth);
    this.currentLetter = this.alphabet[currentLetterIndex];

  }

  ngOnInit(): void {
  }

}
// function ViewChild(arg0: string): (target: PrototypeComponent, propertyKey: "container") => void {
//   throw new Error('Function not implemented.');
// }

