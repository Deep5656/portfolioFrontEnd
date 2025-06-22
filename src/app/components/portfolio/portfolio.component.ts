import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private _service: ProjectService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {}

  project: any = {};
  isLoading: boolean = true;

  @ViewChild('dialogContainer', { read: ViewContainerRef }) dialogContainer!: ViewContainerRef;

  ngOnInit(): void {
    this._service.getAllProjects().subscribe((data: any) => {
      setTimeout(() => {
        this.project = data;
        this.isLoading = false;
      }, 1000);
    }, (error: any) => {
      console.log(error);
      alert('something went wrong...');
    });
  }

  showMore(project: any) {
    const dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const dialogComponentRef = this.dialogContainer.createComponent(dialogComponentFactory);
    const dialogComponentInstance = dialogComponentRef.instance as DialogComponent;
    dialogComponentInstance.data = project;
    dialogComponentInstance.componentRef = dialogComponentRef; // Pass the ComponentRef to the DialogComponent
  }










  

  
}
