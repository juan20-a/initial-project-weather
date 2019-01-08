import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import {Example} from '../../../example';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  example: Example;
  constructor(private Api: ApiService) { }

  ngOnInit() {
  }

  showExample() {
    console.log(this.Api.getExample()
      .subscribe((data: Example) => this.example = {data: data}));
  }

}
