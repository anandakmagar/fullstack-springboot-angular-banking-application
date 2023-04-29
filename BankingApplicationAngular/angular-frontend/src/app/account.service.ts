import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = "http://localhost:8080/accounts";

  constructor(private httpClient: HttpClient) {}

  getAccountList(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.url}`);
  }

  createAccount(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(`${this.url}`, account);
  }
}
