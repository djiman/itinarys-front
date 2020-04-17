import { LigneDetailsComponent } from './ligne-details/ligne-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigneListComponent } from './ligne-list/ligne-list.component';

const routes: Routes = [
  { path: 'lignes', component: LigneListComponent },
  { path: 'details/:nomLigne', component: LigneDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
