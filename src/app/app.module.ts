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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
