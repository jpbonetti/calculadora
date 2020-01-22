import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: number;
  historyCalculates = [];
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.clean(true);
  }

  clean(cleanResult: boolean): void {
    this.number1 = '0';
    this.number2 = null;
    this.operation = null;

    if (cleanResult) {
      this.result = null;
    }
  }

  addNumber(num: string): void {
    if (this.operation !== null) {
      this.number2 = this.calculadoraService.alocateNumbers(this.number2, num, this.operation);
    } else {
      this.number1 = this.calculadoraService.alocateNumbers(this.number1, num, this.operation);
    }
  }

  calculate(operation): void {
    if (operation !== null) {
      this.setOperation(operation);
      this.result = this.calculadoraService.calculate(this.number1, null, this.operation);

      this.addResultToHistory();
      this.clean(false);
    } else if (this.number1 && this.number2) {
      this.result = this.calculadoraService.calculate(this.number1, this.number2, this.operation);

      this.addResultToHistory();
      this.clean(false);
    }
  }

  addResultToHistory(): void {
    this.historyCalculates.push(
      this.calculadoraService.getResultToAddOnHistory(this.number1, this.number2, this.operation)
    );
  }

  setOperation(operation): void {
    this.operation = operation;
  }

  get display(): string {
    if (this.result !== null) {
        return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1;
  }
}
