import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartScannerComponent} from './part-scanner.component';
import {PartListComponent} from './components/part-list/part-list.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: PartScannerComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
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
