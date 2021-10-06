import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {  
    private a: number = 0;
    private b: number = 0;
    private operador: number = 0; 

  constructor() { }

  ngOnInit(): void {
  }


}
