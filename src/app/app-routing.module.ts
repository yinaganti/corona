import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid-report/covid/covid.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found/file-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { Constants } from './model/constants';

const routes: Routes = [
  
  {path : '', redirectTo : Constants.HOME, pathMatch: 'full'},
  { path : Constants.HOME, component : HomeComponent},
  {path : Constants.HOME + '/' + Constants.ANDRA, component : CovidComponent},
  {path : Constants.HOME + '/' + Constants.TELENGANA, component : CovidComponent},
  {path : '**', component : FileNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FileNotFoundComponent,HomeComponent,CovidComponent]
