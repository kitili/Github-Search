import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HaterService } from '../hater.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Info: any;
  githubUserQuery:string="kitili"

  constructor(private haterService: HaterService, private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public Repos:any[] | undefined=[]
  
  public searchUser(){
    //getting profile
    const allhater=[]
    this.haterService.info(this.githubUserQuery).subscribe((data: any) =>{
    allhater.push(data);
      console.log(data)
    })
    console.log(allhater)
    console.log( this.haterService.info(this.githubUserQuery).subscribe((data: any) =>{
      this.Info = data;
    }))
    // github repos
  //   this.http .repos(this.githubUserQuery).subscribe((data: any[] | undefined) => {
  //     this.Repos = data;
  //    })
  //  }
  //  Info(githubUserQuery: string | undefined) {
  //    throw new Error('Method not implemented.');
  //  }

  


  this.ngOnInit(): void {
  }

}
