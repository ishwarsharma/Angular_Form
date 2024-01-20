/**
 * app.component.ts to bootstrap the application, render the root component, 
 * and provide services to other components.
 * 
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApp';
}
