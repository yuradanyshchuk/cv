import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profile = {
    name: 'Yurii',
    surname: 'Danyshchuk',
    phone: '+380976123968',
    email: 'yuradanyshchuk@gmail.com',
    city: 'Ivano-Frankivsk',
    descr: 'I am studying!'
  };
}

