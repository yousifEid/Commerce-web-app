import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule
  ]
})
export class SettingsModule { }
