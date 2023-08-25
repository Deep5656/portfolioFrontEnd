import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit{

  constructor(private _service:ProjectService,private activeroute:ActivatedRoute,private router:Router){}

  id:any;

  project = {
    title: '',
    image: '',
    description: '',
    link: ''
  }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    this._service.getProject(this.id).subscribe((data:any)=>{
      this.project = data;
    },(error:any)=>{
      console.log(error);
    })
  }

  updateProject() {
    this._service.addProject(this.project).subscribe((data:any) => {
      // console.log(data);
      // this.project = data;
      alert("Data Updated SuccesFully");
      this.router.navigate(['admin-dashboard/admin-panel-dash']);
    },(error:any) => {
      console.log(error);
alert("some error occured");
    })
    console.log("project added");
  }


}
