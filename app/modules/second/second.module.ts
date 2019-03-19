import { Routes, RouterModule } from '@angular/router';
import { SecondMainComponent } from './components/second-main/second-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTest1Component } from './components/second-test1/second-test1.component';

const SecondRoutes: Routes =  [
  { path: '', component: SecondMainComponent},
  { path: 'test1', component: SecondTest1Component}
];

@NgModule({
  imports: [
    RouterModule.forChild(SecondRoutes)
  ],
  declarations: [SecondMainComponent, SecondTest1Component]
})
export class SecondModule { }
