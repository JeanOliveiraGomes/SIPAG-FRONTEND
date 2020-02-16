import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';

@Injectable()
export class LoggedInGuardOperador implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const logged = sessionStorage.getItem('token') ? true : false;
        const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        let isOperador = false;

        if (userDetails && userDetails.authorities) {
            userDetails.authorities.forEach(element => {
                if (element.authority === 'OPERADOR' || element.authority === 'ADMIN') {
                    isOperador = true;
                }
            });
        }
        if (!logged) {
            this.router.navigate(['/']);
        } else if (!isOperador) {
            this.router.navigate(['/home']);
        }
        return logged;
    }

}