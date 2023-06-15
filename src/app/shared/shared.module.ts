import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MaterialModule
  ], exports: [
    MaterialModule
  ]
})
export class SharedModule { }
