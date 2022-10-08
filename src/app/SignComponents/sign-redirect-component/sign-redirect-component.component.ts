import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'src/app/Services/AuthService/OAuth2service';

@Component({
  selector: 'app-sign-redirect-component',
  templateUrl: './sign-redirect-component.component.html',
  styleUrls: ['./sign-redirect-component.component.css']
})
export class SignRedirectComponentComponent implements OnInit {

  constructor(private oAuthService: OAuthService, private _router: Router) {
   
  }
  ngOnInit(): void {
    this.oAuthService.completelogin().then(user => {
      this._router.navigate(['/'], { replaceUrl: true });
    });
  }
}
