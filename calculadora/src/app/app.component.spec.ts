import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraComponent, CalculadoraModule } from './calculadora';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        CalculadoraModule
      ]
    }).compileComponents();
  });
});
