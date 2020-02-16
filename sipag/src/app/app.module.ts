import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './apiProvider/interceptor/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { LoggedInGuardAdmin } from './config/LoggedInGuardAdmin';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { LoggedInGuardOperador } from './config/LoggedInGuardOperador';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroPessoaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  providers: [LoggedInGuardAdmin, LoggedInGuardOperador,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
