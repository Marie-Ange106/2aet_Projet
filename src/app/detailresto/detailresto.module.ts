import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailrestoPageRoutingModule } from './detailresto-routing.module';

import { DetailrestoPage } from './detailresto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailrestoPageRoutingModule
  ],
  declarations: [DetailrestoPage]
})
export class DetailrestoPageModule {}
