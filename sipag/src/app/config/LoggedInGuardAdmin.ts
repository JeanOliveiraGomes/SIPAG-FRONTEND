import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';

@Injectable()
export class LoggedInGuardAdmin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const logged = sessionStorage.getItem('token') ? true : false;
        const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        let isAdmin = false;

        if (userDetails && userDetails.authorities) {
            userDetails.authorities.forEach(element => {
                if (element.authority === 'ADMIN') {
                    isAdmin = true;
                }
            });
        }
        if (!logged) {
            this.router.navigate(['/']);
        } else if (!isAdmin) {
            this.router.navigate(['/home']);
        }
        return logged;
    }

}