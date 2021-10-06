import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {  
    private a: number = 0;
    private b: number = 0;
    private o: number = 0; 
    public r: number = 0;

  // injetando o serviço na classe
  constructor(private servico: CalculadoraService) { }

  ngOnInit(): void {
  }
  
  public get operandoA() : number {
    return this.a;
  }
  
  public set operandoA($a: number) {
    this.a = $a;
  }

  public get operandoB() : number {
    return this.b;
  }
    
  public set operandoB($b: number) {
    this.b = $b;
  }

  public get operador() : number {
    return this.o;
  }
    
  public set operador($v: number) {
    this.o = $v;
  }

  public calcular(): void {
    console.log("Realizando cálculos...");
    // a função calcular no serviço retorna um observable, então precisamos dar subcribe nesse observable
    this.servico.calcular(this.a, this.b, this.o).subscribe(
      data => console.log(data)
    );
  }

}
