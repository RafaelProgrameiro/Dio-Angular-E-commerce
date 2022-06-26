import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Book } from "./model/book"

@Injectable()

export class BookService {
    private url = '';

    httpOptions = {
        Headers: new HttpHeaders ({'content-type': 'application/json'})
    }

    constructor (private httpClient: HttpClient){}

    getBook(){
        return this.httpClient.get(this.url);
    }
}
