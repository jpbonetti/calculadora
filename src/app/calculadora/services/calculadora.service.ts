import { Injectable } from '@angular/core';

import { OperationEnum } from '../utils/OperationEnum';

const DOT = '.';
const VAZIO = '';
const ZERO = '0';

@Injectable()
export class CalculadoraService {

  constructor() { }

  calculate(number1: string, number2: string, operation: number): number {
    let result = 0;
    switch (operation) {
      case OperationEnum.DIVISION:
          result = parseFloat(number1) / parseFloat(number2);
          break;
      case OperationEnum.MULTIPLICATION:
          result = parseFloat(number1) * parseFloat(number2);
          break;
      case OperationEnum.SUBTRACTION:
          result = parseFloat(number1) - parseFloat(number2);
          break;
      case OperationEnum.ADDITION:
          result = parseFloat(number1) + parseFloat(number2);
          break;
      case OperationEnum.PERCENTAGE:
        result = parseFloat(number1) / 100;
        break;
      case OperationEnum.SQUARE_ROOT:
        result = Math.sqrt(parseFloat(number1));
        break;
    }

    return result;
  }

  alocateNumbers(numberDisplay: string, newNumber: string, operation: number): string {
    if (operation !== null && numberDisplay === null || (numberDisplay === ZERO)) {
      numberDisplay = VAZIO;
    }
    if (newNumber === DOT) {
      numberDisplay = this.validateDotToAlocateNumber(numberDisplay);
    } else {
      numberDisplay = this.concatString(numberDisplay, newNumber);
    }
    return numberDisplay;
  }

  getResultToAddOnHistory(number1: string, number2: string, operation: number): string {
    if (operation === OperationEnum.PERCENTAGE
        || operation === OperationEnum.SQUARE_ROOT) {
      return number1 + ' ' + this.getOperationSymbol(operation) +
        ' = ' + this.calculate(number1, null, operation);
    } else {
      return number1 + ' ' + this.getOperationSymbol(operation) + ' ' + number2 +
        ' = ' + this.calculate(number1, number2, operation);
    }
  }

  getOperationSymbol(operation: number): string {
    if (operation === OperationEnum.ADDITION) {
      return '+';
    } else if (operation === OperationEnum.DIVISION) {
      return '/';
    } else if (operation === OperationEnum.MULTIPLICATION) {
      return '*';
    } else if (operation === OperationEnum.SUBTRACTION) {
      return '-';
    } else if (operation === OperationEnum.PERCENTAGE) {
      return '%';
    } else if (operation === OperationEnum.SQUARE_ROOT) {
      return '√';
    }
  }

  validateDotToAlocateNumber(numberDisplay: string): string {
    if (numberDisplay === VAZIO) {
      return this.concatString(ZERO, DOT);
    } else if (numberDisplay.split(DOT).length >= 2) {
      return numberDisplay;
    } else {
      return this.concatString(numberDisplay, DOT);
    }
  }

  concatString(string1: string, string2: string): string {
    return string1.concat(string2);
  }
}

