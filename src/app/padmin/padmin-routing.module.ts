import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadminComponent } from './padmin.component';

const routes: Routes = [{ path: '', component: PadminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadminRoutingModule { }
