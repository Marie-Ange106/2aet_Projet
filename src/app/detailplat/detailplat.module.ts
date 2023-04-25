import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailplatPageRoutingModule } from './detailplat-routing.module';

import { DetailplatPage } from './detailplat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailplatPageRoutingModule
  ],
  declarations: [DetailplatPage]
})
export class DetailplatPageModule {}
