import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contatos } from 'src/apis/Contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  basePath!: string;

  constructor(private http: HttpClient) {
    this.basePath = "localhost:4200"
   }

   public getContatos(): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(`${this.basePath}/contatos`);
   }
}
