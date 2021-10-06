import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // injetando o HttpClient como instância para poder usá-lo direto no construtor como sendo um parâmetro privado
  constructor(private http: HttpClient) {
    
  }

  // evidenciando o retorno da função
  public calcular(a:number, b:number, o:number): Observable<any> {
      // post precisa de um parâmetro para ser executado
      return this.http.post('http://localhost:8080/Calculadora/calcular', {});
  }
}
