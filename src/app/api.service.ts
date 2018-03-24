import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
    messages = []

    constructor(private http: Http) {}

    getMessages(){
        this.http.get('http://localhost:8000/messages').subscribe(res => {
            this.messages = res.json();
        })
    }
}