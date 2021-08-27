// import { Injectable } from '@angular/core';
// import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,ActivatedRoute,Router,CanActivateChild } from '@angular/router';
// import { AuthService } from './auth.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthGuardService implements CanActivate {
//     constructor(private router: Router, private authService: AuthService) {}

//     canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//         const allowedRoles = next.data.allowedRoles;
//         const isAuthorized = this.authService.isAuthorized(allowedRoles);
//         if (!isAuthorized) {
//         // this.router.navigate(['accessdenied']);
//          return false;
//         }

       
//         return isAuthorized;
//       }
    
//       canActivateChild(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//       ): Observable<boolean> | Promise<boolean> | boolean {
//         const allowedRoles = next.data.allowedRoles;
//         const isAuthorized = this.authService.isAuthorized(allowedRoles);
//         if (!isAuthorized) {
//           // if not authorized, show access denied message
//          // this.router.navigate(['/accessdenied']);

//          return false;
//         }
    
//         return isAuthorized;
//       }

// }
