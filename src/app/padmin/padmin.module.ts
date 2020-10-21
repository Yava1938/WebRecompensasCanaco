import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadminRoutingModule } from './padmin-routing.module';
import { PadminComponent } from './padmin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [PadminComponent, SidebarComponent],
  imports: [
    CommonModule,
    PadminRoutingModule,SidebarModule.forRoot(),
  ]
})
export class PadminModule { }
