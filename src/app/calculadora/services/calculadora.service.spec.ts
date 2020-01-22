import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { CalculadoraComponent } from '../components';
import { MatListModule } from '@angular/material/list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFontAwesomeModule,
      MatListModule
    ],
    providers: [
      CalculadoraService
    ],
    declarations: [ CalculadoraComponent ]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
});
