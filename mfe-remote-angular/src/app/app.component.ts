import { Component, VERSION } from '@angular/core';
// declare const require: any; // require('./../../package.json').dependencies['@angular/core'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-remote-angular';

  angularVersion = VERSION.full
}
