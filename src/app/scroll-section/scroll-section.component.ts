import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-section',
  templateUrl: './scroll-section.component.html',
  styleUrls: ['./scroll-section.component.css']
})
export class ScrollSectionComponent implements AfterViewInit {

  @ViewChild('container') container!: ElementRef;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentLetter = 'A';

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
}
