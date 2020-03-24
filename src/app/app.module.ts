import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { reducers } from './reducers';
import { SharedModule } from './shared-module/shared.module';
import { AppState } from './state';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>(reducers, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true

        // As of NgRx 9 these runtime checks are turned on by default:
        // strictStateImmutability: true,
        // strictActionImmutability: true
      }
    }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
