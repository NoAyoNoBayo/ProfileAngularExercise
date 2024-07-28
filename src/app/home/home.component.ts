import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgOptimizedImage } from "@angular/common";
import { TransactionsService } from "../services/transactions.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    NgOptimizedImage,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatDividerModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  transactions: any = [];

  constructor(
    private transactionService: TransactionsService,
    private router: Router,
  ) {
    this.transactions = transactionService.getTransactions();
    console.log(this.transactions);
  }

  goHome = () => {
    this.router.navigateByUrl("");
  };
}
