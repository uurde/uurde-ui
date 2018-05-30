import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators";
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { ContactModel } from 'src/app/models/contact.model';
import { HeaderConfig } from 'src/app/services/header.config';

@Injectable()
export class ContactService {
    headerConfig = new HeaderConfig();

    private _url = this.headerConfig.url + "/api/mails";

    constructor(private _http: HttpClient) {

    }    

    createContact(contact: ContactModel) {
        this._http.post(this._url, contact, this.headerConfig.httpOptions).subscribe(status => console.log(JSON.stringify(status)));
        //return this._http.post(this._url, JSON.stringify(contact), this.headerConfig.httpOptions).pipe(tap(res => { return res }));

        //pipe(map(res => res.json())
    }
}