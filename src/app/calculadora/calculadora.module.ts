import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';

import { MatListModule } from '@angular/material/list';
import { CalculadoraService } from './services';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ],
})
export class CalculadoraModule { }
