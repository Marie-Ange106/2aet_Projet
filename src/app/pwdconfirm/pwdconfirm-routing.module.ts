import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwdconfirmPage } from './pwdconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: PwdconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwdconfirmPageRoutingModule {}
