import { Component } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  businessName: string = '';
  yearEstablished: number = 0;
  loanAmount: number = 0;
  selectedProvider: string = '';
  constructor(private loanService:LoanService,private router:Router){};
  
  getBalanceSheet():any{
     
     if(this.businessName==='' || this.yearEstablished<=1000 || this.loanAmount==0 || this.selectedProvider==''){
            alert("provide all the fields");
            return;
     }

     this.loanService.getResults(this.businessName,this.yearEstablished,this.loanAmount,this.selectedProvider).subscribe((data)=>{
     
      const res={
        businessName:this.businessName,
        establishYear:this.yearEstablished,
        loanAmount:this.loanAmount,
        balanceSheet:data
      }
      console.log(res);
     this.router.navigate(['/balance-sheet'],{state:res});
     });
  }
}
