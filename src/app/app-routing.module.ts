import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactComponent } from './contact/contact.component';
import { ComingComponent } from './coming/coming.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { ServicesComponent } from './services/services.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  { path: "contact-us", component: ContactComponent },
  { path: "coming", component: ComingComponent },
  { path: "about", component: AboutComponent },
  { path: "base", component: BaseComponent },
  { path: "", component: MainComponent },
  { path: "services", component: ServicesComponent },
  { path: 'services/:id', component: ServicesComponent },
  { path: "prototype", component: PrototypeComponent },
  { path: "wedding", component: WeddingComponent },
  { path: "coming", component: ComingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
