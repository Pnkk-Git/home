// scrollable-scale.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-scale',
  templateUrl: './scrollable-scale.component.html',
  styleUrls: ['./scrollable-scale.component.css']
})
export class ScrollableScaleComponent implements OnInit {
  currentNumber: number = 0;

  ngOnInit() {}

  onScroll(event: Event): void {
    const scrollbarContainer = event.target as HTMLElement;
    const scrollLeft = scrollbarContainer.scrollLeft;
    this.currentNumber = Math.floor(scrollLeft / 10); // Adjust as needed
  }
}
