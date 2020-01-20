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

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.clean();
  }

  clean(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(num: string): void {
    if (this.number1 !== null) {
      this.number2 = num;
    } else {
      this.number1 = num;
    }
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
