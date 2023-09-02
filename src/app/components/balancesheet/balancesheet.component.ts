import { Component } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.css']
})
export class BalancesheetComponent {
  balanceSheet:any=[]
  businessName: string = '';
  yearEstablished: number = 0;
  loanAmount: number = 0;

  ngOnInit(): void {
    const receivedData = history.state;
    console.log(receivedData)
    const keys = Object.keys(receivedData.balanceSheet);
    this.businessName=receivedData.businessName;
    this.yearEstablished=receivedData.establishYear;
    this.loanAmount=receivedData.loanAmount;
    keys.forEach((key) => {
    
      this.balanceSheet.push(receivedData.balanceSheet[key]);
    });
    console.log(this.balanceSheet);
  }
 constructor(private loanService:LoanService,private router:Router){}

  applyLoan():void{
    console.log(this.businessName,this.yearEstablished,this.loanAmount)
     this.loanService.applyLoan(this.businessName,this.yearEstablished,this.loanAmount,this.balanceSheet).subscribe((data)=>{
     
      this.router.navigate(['/result'],{state:data});
     })
  }

}
