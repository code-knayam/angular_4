import { Component } from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountsService } from "app/accountsService.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {  

  constructor(private loggingService: LoggingService, 
              private accountsService : AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);    
  }
}
