import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someTEXT = 'textando o pipe operators';
  today = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
