import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpClient:HttpClient){};

 url="https://assignment-backend-phi.vercel.app"
  getResults( businessName: string, establishYear: number, loanAmount:number,accountingProvider:string):Observable<any>{
 
    const _url=this.url+"/balance-sheet"
    const data={
      businessName,
      establishYear,
      loanAmount,
      accountingProvider
    }
    return this.httpClient.post(_url,data);
   

  }

  applyLoan(businessName:string,establishYear:number,loanAmount:number,balanceSheet:any):Observable<any>{
       const _url=this.url+"/apply-loan";
       const data={
        businessName,
        establishYear,
        loanAmount,
        balanceSheet
      }
      console.log(data)

      return this.httpClient.post(_url,data);
  }
}
