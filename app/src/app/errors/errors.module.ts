import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: []
})
export class ErrorsModule { }
