import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  constructor(private _service: ProjectService, private _subject: SubjectService, private _router: Router) { }
 
  project = {
    title: '',
    image: '',
    description: '',
    link: ''
  }

  addProject() {
    if (this.project.title == '' || this.project.link == '' || this.project.description == '' || this.project.image == '') {
      alert("Please fill all the files");
      return;
    }
    this._service.addProject(this.project).subscribe((data: any) => {
      console.log(data);
      Swal.fire("Success", "Project Added Successfully", "success");
      // alert("Data added SuccesFully");
      this.project.title = '';
      this.project.link = '';
      this.project.description = '';
      this.project.image = '';
    }, (error: any) => {
      console.log(error);
      Swal.fire("Error", "Some Error Occured", "error");
      // alert("some error occured");
    })
    console.log("project added");
  }


  logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    this._subject.sendAdmin('Admin');
    this._router.navigate(['/admin']);
  }




}
