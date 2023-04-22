import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonpanierService {

  constructor(private httpClient: HttpClient) { }

  getMonPanier(){
    return this.httpClient.get('assets/monpanier.json')
  }
}
