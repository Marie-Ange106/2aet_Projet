import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailplatPage } from './detailplat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailplatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailplatPageRoutingModule {}
