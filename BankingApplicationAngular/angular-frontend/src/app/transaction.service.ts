import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FundTransfer } from './fund-transfer';
import { Observable, catchError } from 'rxjs';
import { FundDeposit } from './fund-deposit';
import { FundWithdraw } from './fund-withdraw';
import { AccountStatement } from './account-statement';
import { AccountStatementRequest } from './account-statement-request';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  url = "http://localhost:8080/transactions";
  
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { 
  }

  transferFund(fundTransfer: FundTransfer): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/transfer`, fundTransfer, this.httpHeader);
  }

  depositFund(fundDeposit: FundDeposit): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/deposit`, fundDeposit, this.httpHeader);
  }

  withdrawFund(fundWithdraw: FundWithdraw): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/withdraw`, fundWithdraw, this.httpHeader);
  }

  getAccountStatementsByAccountNumber(accountNumber: any): Observable<any> {
    return this.httpClient.get<AccountStatement>(`${this.url}/statement/${accountNumber}`, this.httpHeader);
  }

  getTransactionsByAccountNumber(accountNumber: any): Observable<any> {
    return this.httpClient.get<Transaction>(`${this.url}/${accountNumber}`, this.httpHeader);
  }

}
