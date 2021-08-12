import { Component, OnInit } from '@angular/core';
import { HaterService } from '../hater.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(haterService:HaterService) { }

  ngOnInit(): void {
  }

}
