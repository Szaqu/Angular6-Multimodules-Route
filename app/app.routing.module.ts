import { FirstModule } from './modules/first/first.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes =  [
  {path: 'first', loadChildren: './modules/first/first.module#FirstModule'},
  {path: 'second', loadChildren: './modules/second/second.module#SecondModule'},
  {path: 'second/test1', loadChildren: './modules/second/second.module#SecondModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
