import { Injectable } from '@angular/core';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
        case CalculadoraService.SOMA:
        resultado = num1 - num2;
        break;
        case CalculadoraService.SOMA:
        resultado = num1 / num2;
        break;
        case CalculadoraService.SOMA:
        resultado = num1 * num2;
        break;
        default:
          resultado = 0;
    }

    return resultado;
  }
}
