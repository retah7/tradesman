import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => import('./part-scanner/part-scanner.module').then(m => m.PartScannerModule) },
  { path: 'part-scanner', loadChildren: () => import('./part-scanner/part-scanner.module').then(m => m.PartScannerModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


