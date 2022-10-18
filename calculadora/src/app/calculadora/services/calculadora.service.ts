import { Injectable } from '@angular/core';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';

/**
 * Serviço Calculadora
 * @author Vitor Soares <vsoarescsilva@gmail.com>
 * @since 1.0.0
 */

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para identificar as operações de cálculo*/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números
   * @param num1 number
   * @param num2 number
   * @return number Resultado da operação
   */

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
