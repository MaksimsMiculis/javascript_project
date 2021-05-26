import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  $profile: Observable<any>; //observable is a type of variable allow to define data that we have no yet

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.$profile = this.dataService.createCollection('profile');
  }

}