import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SERVICES } from '../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-pop-up',
  templateUrl: './service-pop-up.component.html',
  styleUrls: ['./service-pop-up.component.css']
})
export class ServicePopUpComponent implements OnInit {

  imageUrl: any;
  desc: any;
  title: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private readonly dialog: MatDialog) {
    console.log(data.id)
    let res = SERVICES.filter((e) => { if (e.id == data.id) { return e } else { return } })
    this.imageUrl = res[0].imageUrl;
    this.desc = res[0].description;
    this.title = res[0].title
  }

  @Output() closed = new EventEmitter<void>();

  closePopup() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

  onBookNow() {
    this.dialog.closeAll();
    this.router.navigate(["/contact-us"])
  }

}
