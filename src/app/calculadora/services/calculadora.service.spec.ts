import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { CalculadoraComponent } from '../components';
import { MatListModule } from '@angular/material/list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OperationEnum } from '../utils/OperationEnum';

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
    const resultIntExpected = 2;
    const resultFloatExpected = 0.5;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('4', '2', OperationEnum.DIVISION)).toEqual(resultIntExpected);
    expect(service.calculate('5', '10', OperationEnum.DIVISION)).toEqual(resultFloatExpected);
  });

  it('multiplication should be working', () => {
    const resultIntExpected = 25;
    const resultFloatExpected = 2.5;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('5', '5', OperationEnum.MULTIPLICATION)).toEqual(resultIntExpected);
    expect(service.calculate('5', '0.5', OperationEnum.MULTIPLICATION)).toEqual(resultFloatExpected);
  });

  it('subtraction should be working', () => {
    const resultIntExpected = 5;
    const resultFloatExpected = 4.5;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('10', '5', OperationEnum.SUBTRACTION)).toEqual(resultIntExpected);
    expect(service.calculate('5', '0.5', OperationEnum.SUBTRACTION)).toEqual(resultFloatExpected);
  });

  it('addition should be working', () => {
    const resultIntExpected = 50;
    const resultFloatExpected = 50.5;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('25', '25', OperationEnum.ADDITION)).toEqual(resultIntExpected);
    expect(service.calculate('25', '25.5', OperationEnum.ADDITION)).toEqual(resultFloatExpected);
  });

  it('percentage should be working', () => {
    const resultExpected = 0.2;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('20', null, OperationEnum.PERCENTAGE)).toEqual(resultExpected);
  });

  it('square root should be working', () => {
    const resultExpected = 2;
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.calculate('4', null, OperationEnum.SQUARE_ROOT)).toEqual(resultExpected);
  });

  it('get division symbol with sucess', () => {
    const symbolExpected = '/';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.DIVISION)).toEqual(symbolExpected);
  });

  it('get multiplication symbol with sucess', () => {
    const symbolExpected = '*';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.MULTIPLICATION)).toEqual(symbolExpected);
  });

  it('get subtraction symbol with sucess', () => {
    const symbolExpected = '-';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.SUBTRACTION)).toEqual(symbolExpected);
  });

  it('get addition symbol with sucess', () => {
    const symbolExpected = '+';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.ADDITION)).toEqual(symbolExpected);
  });

  it('get percentage symbol with sucess', () => {
    const symbolExpected = '%';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.PERCENTAGE)).toEqual(symbolExpected);
  });

  it('get square root symbol with sucess', () => {
    const symbolExpected = '√';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getOperationSymbol(OperationEnum.SQUARE_ROOT)).toEqual(symbolExpected);
  });

  it('concat string sucess', () => {
    const resultExpected = 'teste01';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.concatString('teste', '01')).toEqual(resultExpected);
  });

  it('validate if number have a dot', () => {
    const resultExpected = '2.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('2.')).toEqual(resultExpected);
  });

  it('validate if returns 0. if number empty', () => {
    const resultExpected = '0.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('')).toEqual(resultExpected);
  });

  it('validate if returns the same number, but with just one dot', () => {
    const resultExpected = '5.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('5.')).toEqual(resultExpected);
  });

  it('validate if returned number with dot case the number not have dot', () => {
    const resultExpected = '5.';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.validateDotToAlocateNumber('5')).toEqual(resultExpected);
  });

  it('validate if returns is equals division calculate', () => {
    const resultExpected = '4 / 2 = 2';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('4', '2', OperationEnum.DIVISION)).toEqual(resultExpected);
  });

  it('validate if returns is equals multiplication calculate', () => {
    const resultExpected = '4 * 2 = 8';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('4', '2', OperationEnum.MULTIPLICATION)).toEqual(resultExpected);
  });

  it('validate if returns is equals subtraction calculate', () => {
    const resultExpected = '4 - 2 = 2';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('4', '2', OperationEnum.SUBTRACTION)).toEqual(resultExpected);
  });

  it('validate if returns is equals addition calculate', () => {
    const resultExpected = '4 + 2 = 6';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('4', '2', OperationEnum.ADDITION)).toEqual(resultExpected);
  });

  it('validate if returns is equals percentage calculate', () => {
    const resultExpected = '20 % = 0.2';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('20', null, OperationEnum.PERCENTAGE)).toEqual(resultExpected);
  });

  it('validate if returns is equals square root calculate', () => {
    const resultExpected = '4 √ = 2';
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service.getResultToAddOnHistory('4', null, OperationEnum.SQUARE_ROOT)).toEqual(resultExpected);
  });
});
