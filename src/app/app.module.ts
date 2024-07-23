import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BottomComponent } from './bottom/bottom.component';
import { Bottom1Component } from './bottom1/bottom1.component';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ComingComponent } from './coming/coming.component';
import { AboutComponent } from './about/about.component';
import { ScrollSectionComponent } from './scroll-section/scroll-section.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ServicePopUpComponent } from './service-pop-up/service-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrototypeComponent } from './prototype/prototype.component';
import { WeddingComponent } from './wedding/wedding.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import {ChangeDetectionStrategy} from '@angular/core';
import {NativeDateAdapter} from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ScrollableScaleComponent } from './scrollable-scale/scrollable-scale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomComponent,
    Bottom1Component,
    BaseComponent,
    HeaderComponent,
    ContactComponent,
    ComingComponent,
    AboutComponent,
    ScrollSectionComponent,
    MainComponent,
    ServicesComponent,
    ServicePopUpComponent,
    PrototypeComponent,
    WeddingComponent,
    ScrollableScaleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
