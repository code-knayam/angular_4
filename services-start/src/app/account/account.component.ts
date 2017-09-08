import { Component, Input} from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountsService } from "app/accountsService.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;  

  constructor(private loggingService: LoggingService, 
              private accountsService: AccountsService) {}

  onSetTo(status: string) {    
    this.accountsService.changeStatus(this.id, status);
    
  }
}
