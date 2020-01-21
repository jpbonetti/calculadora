import { Injectable } from '@angular/core';

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
    if (operation === 1) {
      result = parseInt(number1) / parseInt(number2);
    }

    return result;
  }
}

