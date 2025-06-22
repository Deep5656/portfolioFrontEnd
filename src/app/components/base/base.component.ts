import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

 
  Admin:any = 'Admin';
  constructor(private _subject:SubjectService,private _router: Router){}
 
  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    console.log("userName", userName);
    if(userName != null){
      this.Admin = userName;
    }
    this._subject.getAdmin().subscribe((data)=>{
      console.log(data);
      this.Admin = data;
    })

    const timer = 10000; // duration in milliseconds
let remainingTime = timer;

setTimeout(() => {
  const swal = Swal.fire({
    title: 'Session Timeout',
    text: 'You will be logged out in 10 seconds.',
  })

  const timerInterval = setInterval(() => {
    remainingTime -= 1000;
    Swal.update({
      text:`You will be logged out in ${Math.floor(remainingTime / 1000)} seconds.`
    });
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      // Perform logout action here
      console.log('Timer expired, logging out...');
    }
  }, 1000);
}, 1199000);


    setTimeout(()=> {
      this.Admin = 'Admin';
      this._router.navigate(['/admin'])
    },1200000);
}
 
}
