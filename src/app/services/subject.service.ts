import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubjectService{

    private subject = new Subject();
    constructor() { }

    sendAdmin(admin:any){
        this.subject.next(admin);
    }

    getAdmin(){
       return this.subject.asObservable();
    }
}