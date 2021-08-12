import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { Observable, observable } from 'rxjs';
import { Userdata } from './userdata'; 
import { Repodata } from './repos'; 
import { reject } from 'q';
import { resolve } from 'path';
import { ResolveStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HaterService {
  userData:Userdata
  repoData:Repodata[]
  repoclass:Repodata
  constructor(private http:HttpClient){
    this.userData=new Userdata("","","","","")
    this.repoData=[]
    this.repoclass=new Repodata("","")
  }

  apiRequest(){
    interface ApiResponse{
      login:string
      repos_url:string
      avatar_url:string
      name:string
      bio:string

    }
   let promise =new Promise((resolve,reject)):void=>{this.http.get<Response>('https://api.github.com/users/
}
  
  } 