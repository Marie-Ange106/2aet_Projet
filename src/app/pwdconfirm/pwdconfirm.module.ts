import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwdconfirmPageRoutingModule } from './pwdconfirm-routing.module';

import { PwdconfirmPage } from './pwdconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwdconfirmPageRoutingModule
  ],
  declarations: [PwdconfirmPage]
})
export class PwdconfirmPageModule {}
