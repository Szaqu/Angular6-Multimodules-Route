import { FirstMainComponent } from './components/first-main/first-main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const firstRoutes: Routes =  [
  { path: '', component: FirstMainComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(firstRoutes)
  ],
  declarations: [FirstMainComponent]
})
export class FirstModule { }
