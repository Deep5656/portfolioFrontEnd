import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  //add project
  public addProject(project:any){
    return this._http.post(`https://portfoliosignup-production.up.railway.app/project`,project);
  }

  //get all projects
  public getAllProjects(){
    return this._http.get(`https://portfoliosignup-production.up.railway.app/project`);
  }

  //get single project
  public getProject(id:any){
    return this._http.get(`https://portfoliosignup-production.up.railway.app/project/${id}`);
  }

  //delete project
  public deleteProject(id:any){
    return this._http.delete(`https://portfoliosignup-production.up.railway.app/project/${id}`);
  }
}
