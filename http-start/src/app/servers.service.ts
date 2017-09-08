import { Injectable } from "@angular/core";
import { Response, Headers, Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServersService {

    constructor(private http: Http) {}

    saveServer( servers: any[] ) {
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://shoppingapp-72939.firebaseio.com/data.json', 
        servers, 
        {headers: header});
    }

    getServers(){
        return this.http.get('https://shoppingapp-72939.firebaseio.com/data.json')
        .map(
            (response: Response) => {
                return response.json();
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw("Something went wrong");
            }
        );
    }

}