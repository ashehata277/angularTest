import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'src/app/Services/AuthService/OAuth2service';

@Component({
  selector: 'app-sign-redirect-component',
  templateUrl: './sign-redirect-component.component.html',
  styleUrls: ['./sign-redirect-component.component.css']
})
export class SignRedirectComponentComponent {

  constructor(private oAuthService : OAuthService) {
    this.oAuthService.completelogin().then(user => {
    });
  }
}
