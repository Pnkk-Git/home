import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BottomComponent } from './bottom/bottom.component';
import { Bottom1Component } from './bottom1/bottom1.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {path: "bottom", component: BottomComponent},
  {path: "", component:Bottom1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
