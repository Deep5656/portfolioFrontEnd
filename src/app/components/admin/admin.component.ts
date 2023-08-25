import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private _signup: SignupService,private _router:Router) { }

  user = {
    userName: '',
    password: ''
  }

  signin() {
    this._signup.validateUser(this.user).subscribe((data:any) => {
      Swal.fire("Success","Successfully SignedIn","success");
      console.log(data);
      if(!data){
      Swal.fire("Error","Wrong Credentials","error");
        // alert("Wrong Credentials");
      }
      else{
        this._router.navigate(['/admin-dashboard']);
      }
    }, (error:any) => {
      Swal.fire("Error","Something went wrong !!","error");
      console.log(error);
    });
    console.log("signed in");
  }

}
