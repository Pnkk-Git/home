import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
 
  styleUrls: ['./coming.component.css']
})
export class ComingComponent implements OnInit {
  selectedDate: Date | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
