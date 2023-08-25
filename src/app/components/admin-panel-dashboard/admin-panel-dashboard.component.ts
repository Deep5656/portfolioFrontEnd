import { Component,OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-panel-dashboard',
  templateUrl: './admin-panel-dashboard.component.html',
  styleUrls: ['./admin-panel-dashboard.component.css']
})
export class AdminPanelDashboardComponent implements OnInit {

  constructor(private _service:ProjectService){}

  project:any = {
    id:'',
    title: '',
    image: '',
    description: '',
    link: ''
  }

  ngOnInit(): void {
    this._service.getAllProjects().subscribe((data:any)=>{
      this.project=data;
    },(error:any)=>{
      console.log(error);
    });
  }

  //delete project
  delete(id:any){
    console.log('clicked');
    
     this._service.deleteProject(id).subscribe((data:any)=>{
      console.log(data);
      // Remove the project from the array
      const index = this.project.findIndex((item: { id: any; }) => item.id === id);
      this.project.splice(index, 1);
      
     },(error:any)=>{
      console.log(error);
      
     })
  }

  //update project
  update(){
    
  }

}
