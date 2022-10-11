import { Injectable } from "@angular/core";
import { User, UserManager, WebStorageStateStore } from "oidc-client";
import { from, Subject } from "rxjs";
import { ConfigurationReader } from "../CofigurationReader/ConfigurationReader";

@Injectable({
    providedIn: 'root'
})
export class OAuthService {
    private _userManager: UserManager;
    private _user: User | null;
    public _loginChangedSubject = new Subject<boolean>();
    public loginChanged = this._loginChangedSubject.asObservable();
    public access_token: string | undefined;
    private clientRoot: string;
    private clientId: string;
    private idpAuthority: string;
    public isUserAuthenticaed :boolean;
    constructor(private reader: ConfigurationReader) {
        this.clientRoot = reader.Read('baseUrl');
        this.clientId = reader.Read('clientId');
        this.idpAuthority = reader.Read('idpAuthority');


        this._userManager = new UserManager(
            {
                authority: this.idpAuthority,
                client_id: this.clientId,
                redirect_uri: `${this.clientRoot}/signin-callback`,
                scope: "openid profile AngularApis",
                response_type: "code",
                post_logout_redirect_uri: `${this.clientRoot}/signout-callback`,
                loadUserInfo: true,
                userStore: new WebStorageStateStore({ store: window.localStorage }),
                filterProtocolClaims: false,
            }
        );
        this.isAuthenticated;
        from(this.isAuthenticated()).subscribe(isAuthenticated=>{
            this.isUserAuthenticaed = isAuthenticated;
        });
        this.access_token = this._user?.access_token;
    }

    completelogin() {
        return this._userManager.signinRedirectCallback().then(user => {
            this._user = user;
            this._loginChangedSubject.next(!!user && !user.expired);
            return user;
        })
    }

    public GetUser = (): Promise<User | null> => {
        return this._userManager.getUser();
        };
      

    completeLogout() {
        this._user = null;
        return this._userManager.signoutRedirectCallback();
    }


    public login = () => {
        return this._userManager.signinRedirect();
    }
    public logout = () => {
        return this._userManager.signoutRedirect();
    }
    public isAuthenticated = (): Promise<boolean> => {
        return this._userManager.getUser()
            .then(user => {
                if (this._user !== user) {
                    this._loginChangedSubject.next(this.checkUser(user));
                }
                this._user = user;
                this.access_token = user?.access_token;
                return this.checkUser(user);
            });
    }
    public checkUser = (user: User | null): boolean => {
        if (user === null) {
            return false;
        }
        else {
            if (user.expired) {
                return false;
            }
            else {
                return true;
            }
        }
    }

}   