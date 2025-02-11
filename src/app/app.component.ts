import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email:'aweasley.gina@....',
    role: 'admin',
  };
  title = 'meu-projeto-angular-13';
}
