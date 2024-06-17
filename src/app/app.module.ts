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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
