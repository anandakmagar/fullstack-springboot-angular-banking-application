import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { FundDepositComponent } from './fund-deposit/fund-deposit.component';
import { FundWithdrawComponent } from './fund-withdraw/fund-withdraw.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AccountStatementDetailsComponent } from './account-statement-details/account-statement-details.component';

const routes: Routes = [
  {path: "deposit", component: FundDepositComponent},
  {path: "transfer", component: FundTransferComponent},
  {path: "withdraw", component: FundWithdrawComponent},
  {path: "statement", component: AccountStatementComponent},
  {path: 'getByAccountNumber/:accountNumber', component: AccountStatementDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
