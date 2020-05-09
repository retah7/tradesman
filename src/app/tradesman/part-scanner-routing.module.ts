import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../shared/guard/auth.guard';
import {PartScannerComponent} from './part-scanner.component';
import {PartListComponent} from './components/part-list/part-list.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: PartScannerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'scan-part' },
      { path: 'home', component: HomeComponent },
      { path: 'part-list', component: PartListComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartScannerRoutingModule { }
