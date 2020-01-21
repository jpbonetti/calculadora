import { Injectable } from '@angular/core';

import { OperationEnum } from '../utils/OperationEnum';

@Injectable()
export class CalculadoraService {

  constructor() { }

  alocateNumbers(numberDisplay: string, newNumber: string, operation: number): string {
    if (operation !== null && numberDisplay === null || (numberDisplay === '0')) {
      numberDisplay = '';
    }
    if (newNumber === '.') {
      if (numberDisplay === '') {
        numberDisplay = '0.';
      } else if (numberDisplay.split('.').length >= 2) {
        numberDisplay = numberDisplay;
      } else {
        numberDisplay = numberDisplay + '.';
      }
    } else {
      numberDisplay = numberDisplay + newNumber;
    }
    return numberDisplay;
  }

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
}

