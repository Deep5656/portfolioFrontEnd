import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from "@angular/core";

@Component({
    selector:'dialogComponent',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit{

  data:any;
  context: any;
  componentRef: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private viewConatinerRef: ViewContainerRef
    ){}
    ngOnInit(): void {
        console.log("data",this.data);
        
    }

    close(){
        this.componentRef.destroy();
    }
}