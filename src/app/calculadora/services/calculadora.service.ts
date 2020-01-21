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

  validateDotToAlocateNumber(numberDisplay: string): string {
    if (numberDisplay === VAZIO) {
      numberDisplay = this.concatString(ZERO, DOT);
    } else if (numberDisplay.split(DOT).length >= 2) {
      numberDisplay = numberDisplay;
    } else {
      numberDisplay = this.concatString(numberDisplay, DOT);
    }

    return numberDisplay;
  }

  concatString(string1: string, string2: string): string {
    return string1.concat(string2);
  }
}

