import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './components/loan/loan.component';
import { BalancesheetComponent } from './components/balancesheet/balancesheet.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: LoanComponent},
  {path:'balance-sheet', component:BalancesheetComponent},
  {path:'result',component:ResultComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
