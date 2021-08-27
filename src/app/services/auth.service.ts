// import { Injectable, Inject } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { LoginModel, JWTokenModel } from '../models';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AppUtilities } from './app.utilities';
// import { Appkeys } from './app.keys';
// import { AppInfoService } from './app.info.service';
// import { Observable, Subject } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   loggedIn = false;
//   tokenValue: JWTokenModel;
//   baseUrl: string;
//   errorMessage: string;
  

//   constructor(public router: Router, public http: HttpClient, appInfo: AppInfoService,private jwtHelperService: JwtHelperService) {
//     this.baseUrl = appInfo.apiBaseUrl;
//     this.http = http;
//   //  localStorage.clear();
//   }

//   logIn(login: LoginModel): Observable<any> {
//     var subject= new Subject<any>();
//     localStorage.setItem(Appkeys.CURRENT_USER, login.username);
//     this.http.post<JWTokenModel>(this.baseUrl + '/identity/login', AppUtilities.JSonstringify(login), { headers: AppUtilities.getHttpHeadersApplicationJson() }).subscribe(result => {
//       this.tokenValue = result;

//       localStorage.setItem(Appkeys.ACCESS_TOKEN, this.tokenValue.jwToken);
//       if (localStorage.getItem(Appkeys.ACCESS_TOKEN) != undefined && localStorage.getItem(Appkeys.ACCESS_TOKEN) != null) {
//         this.loggedIn = true;
//         this.router.navigate(['/adminstration/wellview']);
//       }
//     },
//       error => {
//         console.error(error)
//         this.errorMessage = error
//         subject.next({ text: this.errorMessage });
//       }
//     );
//     return subject.asObservable();
//   }

//   logOut() {
//     this.isAuthorized(null);
//     localStorage.clear();
//     this.router.navigate(['/login']);
//   }


//   isAuthorized(allowedRoles: string[]): boolean {
//     // check if the list of allowed roles is empty, if empty, authorize the user to access the page
//     if (allowedRoles == null || allowedRoles.length === 0) {
//       return true;
//     }

//     // get token from local storage or state management
//     const token = localStorage.getItem(Appkeys.ACCESS_TOKEN);

  

//     // decode token to read the payload details
//     const decodeToken = this.jwtHelperService.decodeToken(token);
//     console.log("tokens"+decodeToken['role'])

//     // check if it was decoded successfully, if not the token is not valid, deny access
//     if (!decodeToken) {
//       console.log('Invalid token');
//       return false;
//     }

//     return allowedRoles.includes(decodeToken['role']);
//   }

//   get isLoggedIn() {
//     return this.loggedIn;
//   }

//   getCurrentUserRole():any{
//     const token = localStorage.getItem(Appkeys.ACCESS_TOKEN);
//     const decodeToken = this.jwtHelperService.decodeToken(token);
//     return decodeToken['role'];
//   }
// }

