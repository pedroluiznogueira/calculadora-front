import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // injetando o HttpClient como instância para poder usá-lo direto no construtor como sendo um parâmetro privado
  constructor(private http: HttpClient) {
    
  }

  public calcular(a:number, b:number, o:number) {
      // fazendo requisição do tipo get para uma API
      return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }
}
