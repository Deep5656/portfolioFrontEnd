import { Component,OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: 'warning',
      title: 'are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteProject(id).subscribe((data:any)=>{
          console.log(data);
          // Remove the project from the array
          const index = this.project.findIndex((item: { id: any; }) => item.id === id);
          this.project.splice(index, 1);
          
         },(error:any)=>{
          console.log(error);
          
         })
      }
    });
    // console.log('clicked');
    
    //  this._service.deleteProject(id).subscribe((data:any)=>{
    //   console.log(data);
    //   // Remove the project from the array
    //   const index = this.project.findIndex((item: { id: any; }) => item.id === id);
    //   this.project.splice(index, 1);
      
    //  },(error:any)=>{
    //   console.log(error);
      
    //  })
  }

  // deleteCategory(cid: any) {

  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'are you sure ?',
  //     confirmButtonText: 'Delete',
  //     showCancelButton: true,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this._category.deleteCategory(cid).subscribe(
  //         (data: any) => {
  //         this.categories=this.categories.filter((category) => category.cid != cid)
  //         Swal.fire("Success", "Category Deleted", "success");
  //       }, (error) => {
  //         Swal.fire("Error", "First Delete Quizzes of this category", "error");
  //       })
  //     }
  //   });
  // }

}
