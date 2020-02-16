import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/apiProvider/api.service';
import { EstabelecimentoEntity } from 'src/app/entidades/estabelecimentoEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoServiceService {

  private path = 'estabelecimento';

  constructor( private api: ApiService ) {

  }

  public save(estabelecimento: EstabelecimentoEntity): Observable<any> {
    return this.api
      .post(`${this.path}`,  estabelecimento);
  }

  public findAll() {
    return this.api.get(`${this.path}`);
  }

  public delete(id: number): Observable<any> {
    return this.api
      .get(`${this.path}/delete?id=${id}`);
  }
}
