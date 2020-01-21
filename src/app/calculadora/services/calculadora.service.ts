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
          result = this.calculateDivision(number1, number2);
          break;
      case OperationEnum.MULTIPLICATION:
          result = this.calculateMultiplication(number1, number2);
          break;
      case OperationEnum.SUBTRACTION:
          result = this.calculateSubtraction(number1, number2);
          break;
      case OperationEnum.ADDITION:
          result = this.calculateAddition(number1, number2);
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

  calculateDivision(number1: string, number2: string): number {
    return parseFloat(number1) / parseFloat(number2);
  }

  calculateMultiplication(number1: string, number2: string): number {
    return parseFloat(number1) * parseFloat(number2);
  }

  calculateSubtraction(number1: string, number2: string): number {
    return parseFloat(number1) - parseFloat(number2);
  }

  calculateAddition(number1: string, number2: string): number {
    return parseFloat(number1) + parseFloat(number2);
  }

  concatString(string1: string, string2: string): string {
    return string1.concat(string2);
  }
}

