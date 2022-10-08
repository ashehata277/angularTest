import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'src/app/Services/AuthService/OAuth2service';

@Component({
  selector: 'app-sign-out-redirect-component',
  templateUrl: './sign-out-redirect-component.component.html',
  styleUrls: ['./sign-out-redirect-component.component.css']
})
export class SignOutRedirectComponentComponent implements OnInit{

  constructor(private oAuthService: OAuthService,private _router: Router) {
  
  }
  ngOnInit(): void {
    this.oAuthService.completeLogout().then(user => {
      this._router.navigate(['/'], { replaceUrl: true });
    })
  }



}
