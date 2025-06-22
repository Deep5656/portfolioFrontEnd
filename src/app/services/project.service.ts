import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  componentFactoryResolver: any;

  constructor(private _http:HttpClient) { }

  //add project
  public addProject(project:any){
    return this._http.post(`http://localhost:8181/project`,project);
  }

  //get all projects
  public getAllProjects(){
    return this._http.get(`http://localhost:8181/project`);
  }

  //get single project
  public getProject(id:any){
    return this._http.get(`http://localhost:8181/project/${id}`);
  }

  //delete project
  public deleteProject(id:any){
    return this._http.delete(`http://localhost:8181/project/${id}`);
  }
}
