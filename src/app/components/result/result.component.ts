import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
    preAssessment: number=0;
    isLoanApproved: boolean=false;

    ngOnInit(): void {
      const receivedData = history.state;
      console.log(receivedData)
      this.preAssessment=receivedData.preAssessment;
      this.isLoanApproved=receivedData.isApproved
    }
}
