import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // injetando o HttpClient como instância para poder usá-lo direto no construtor como sendo um parâmetro privado
  constructor(private http: HttpClient) {
    // fazendo requisição do tipo get para uma API
    return this.http.get("https://st1.zoom.us/web_client/5g6glw/html/externalLinkPage.html?ref=https://pokeapi.co/api/v2/pokemon/ditto");
    
  }

  public calcular(a:number, b:number, o:number) {

  }
}
