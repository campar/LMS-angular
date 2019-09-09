import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lms-front';

  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        const routerError = error.toString();
        if (routerError.indexOf('Cannot match any routes') >= 0 ) {
           this.router.navigate(['/']);
        } else {
           throw error;
        }
    };
  }
}
