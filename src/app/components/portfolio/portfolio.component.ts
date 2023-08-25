import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private _service:ProjectService){}

  project:any = {
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

}
