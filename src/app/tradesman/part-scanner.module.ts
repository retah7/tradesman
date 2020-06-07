import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PartScannerRoutingModule } from './part-scanner-routing.module';
import { PartScannerComponent } from './part-scanner.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CameraComponent } from './components/camera/camera.component';
import { MaterialModule } from './common/material/material.module';

import { WebcamModule } from 'ngx-webcam';
import { HomeComponent } from './components/home/home.component';
import { CallsPutsComponent } from './components/calls-puts/calls-puts.component';
import { TabDataComponent } from './components/calls-puts/tab-data/tab-data.component';
import Store from './store/store';

@NgModule({
  declarations: [
    PartScannerComponent,
    PartListComponent,
    HeaderComponent,
    SidebarComponent,
    CameraComponent,
    HomeComponent,
    CallsPutsComponent,
    TabDataComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PartScannerRoutingModule,
    WebcamModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    NgbActiveModal
  ]
})
export class PartScannerModule {

  constructor() {
    Store.initialize();
  }

}
