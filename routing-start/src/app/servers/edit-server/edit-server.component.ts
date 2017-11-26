import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from "app/servers/edit-server/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;    
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
      }
    );
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate() : boolean | Observable<boolean> | Promise<boolean> {
   if ( !this.allowEdit) {
     return true;
   }  
   if ( ( this.serverName !== this.server.name || this.serverStatus !== this.server.status ) 
    && !this.changesSaved ) {
      return confirm(' Do you want to continue ? ');
   } else {
     return true;
   }
  }

}