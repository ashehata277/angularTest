import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'src/app/Services/AuthService/OAuth2service';

@Component({
  selector: 'app-sign-out-redirect-component',
  templateUrl: './sign-out-redirect-component.component.html',
  styleUrls: ['./sign-out-redirect-component.component.css']
})
export class SignOutRedirectComponentComponent {

  constructor(private oAuthService: OAuthService) {
    this.oAuthService.completelogin().then(user => {
    })
  }



}
