import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { LoggedInGuardAdmin } from './config/LoggedInGuardAdmin';
import { LoggedInGuardOperador } from './config/LoggedInGuardOperador';
import { CadastroEstabelecimentoComponent } from './cadastro-estabelecimento/cadastro-estabelecimento.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pessoa', component: CadastroPessoaComponent, canActivate: [LoggedInGuardAdmin]},
  {path: 'estabelecimento', component: CadastroEstabelecimentoComponent, canActivate: [LoggedInGuardOperador]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
