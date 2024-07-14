import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { Bottom1Component } from './bottom1/bottom1.component';
import { ContactComponent } from './contact/contact.component';
import { ComingComponent } from './coming/coming.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: "contact-us", component: ContactComponent },
  { path: "coming", component: ComingComponent },
  { path: "about", component: AboutComponent },
  { path: "base", component: BaseComponent },
  { path: "", component: MainComponent },
  { path: "services", component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
