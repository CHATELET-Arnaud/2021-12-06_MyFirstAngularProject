import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  devices = [
	  {
		  name: 'Washing machine',
		  status: 'off'
	  },
	  {
		  name: 'Fridge',
		  status: 'on'
	  },
	  {
		  name: 'Computer',
		  status: 'off'
	  }
  ];
   
  constructor() {
	  setTimeout(
		() => {
			this.isAuth = true;
		}, 4000
		);
  }
  
  onSwitchOn() {
	  console.log('We switch on all devices !');
  }
}
