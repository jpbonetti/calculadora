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

  it('division should be working', () => {
    const resultExpected = 2;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('4', '2', 1)).toEqual(resultExpected);
  });

  it('multiplication should be working', () => {
    const resultExpected = 25;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('5', '5', 2)).toEqual(resultExpected);
  });

  it('subtraction should be working', () => {
    const resultExpected = 5;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('10', '5', 3)).toEqual(resultExpected);
  });

  it('addition should be working', () => {
    const resultExpected = 50;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('25', '25', 4)).toEqual(resultExpected);
  });

  it('percentage should be working', () => {
    const resultExpected = 0.2;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('20', null, 5)).toEqual(resultExpected);
  });

  it('square root should be working', () => {
    const resultExpected = 2;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('4', null, 6)).toEqual(resultExpected);
  });

  it('get division symbol with sucess', () => {
    const symbolExpected = '/';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(1)).toEqual(symbolExpected);
  });

  it('get multiplication symbol with sucess', () => {
    const symbolExpected = '*';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(2)).toEqual(symbolExpected);
  });

  it('get subtraction symbol with sucess', () => {
    const symbolExpected = '-';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(3)).toEqual(symbolExpected);
  });

  it('get addition symbol with sucess', () => {
    const symbolExpected = '+';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(4)).toEqual(symbolExpected);
  });

  it('get percentage symbol with sucess', () => {
    const symbolExpected = '%';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(5)).toEqual(symbolExpected);
  });

  it('get square root symbol with sucess', () => {
    const symbolExpected = '√';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(6)).toEqual(symbolExpected);
  });

  it('concat string sucess', () => {
    const resultExpected = 'teste01';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.concatString('teste', '01')).toEqual(resultExpected);
  });

  //TODO: Adicionar teste de falha para concatString

  it('validate if number have a dot', () => {
    const resultExpected = '2.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('2.')).toEqual(resultExpected);
  });

  it('validate if return 0. if number empty', () => {
    const resultExpected = '0.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('')).toEqual(resultExpected);
  });

  it('validate if return the same number, but with just one dot', () => {
    const resultExpected = '5.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('5.')).toEqual(resultExpected);
  });
});
