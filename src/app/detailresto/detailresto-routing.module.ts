import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailrestoPage } from './detailresto.page';

const routes: Routes = [
  {
    path: '',
    component: DetailrestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailrestoPageRoutingModule {}
