import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { PartScannerComponent } from './part-scanner.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { ScanPartComponent } from './components/scan-part/scan-part.component';


const routes: Routes = [
  {
    path: '',
    component: PartScannerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'scan-part' },
      { path: 'scan-part', component: ScanPartComponent},
      { path: 'part-list', component: PartListComponent },
      // { path: 'visitor-management', component: VisitorManagementComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartScannerRoutingModule { }
