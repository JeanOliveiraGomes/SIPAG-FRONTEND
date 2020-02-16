import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoEntity } from '../entidades/enderecoEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { PessoaEntity } from '../entidades/pessoaEntity';
import { PerfilEntity } from '../entidades/perfilEntity';


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent {

  private keyword = 'nome';

  private form: FormGroup;

  private pessoa: PessoaEntity = new PessoaEntity();
  private endereco: EnderecoEntity = new EnderecoEntity();
  private perfil: PerfilEntity = new PerfilEntity();

  private allPessoas: any = [];

  constructor(private fb: FormBuilder,
              private pessoaService: PessoaService) {
    this.buildForm();
    this.popularPessoas();
  }

public buildForm() {
  this.form = this.fb.group({
    //pessoa
    nome: [this.pessoa.nome, [Validators.required]],
    email: [this.pessoa.email, [Validators.required]],
    cpf: [this.pessoa.cpf, [Validators.required]],
    dataNascimento: [this.pessoa.dataNascimento, [Validators.required]],
    telefone: [this.pessoa.telefone, [Validators.required]],
    perfil: [this.perfil.perfil, [Validators.required]],
    password: [this.pessoa.password],

    //endereco
    bairro: [this.endereco.bairro, [Validators.required]],
    cep: [this.endereco.cep, [Validators.required]],
    complemento: [this.endereco.complemento],
    uf: [this.endereco.uf, [Validators.required]],

  });
}

  private popularPessoas() {
    this.pessoaService.findAll().subscribe(data => {
      this.allPessoas = data;
    });
  }

  private onSubmit() {
    if (!this.endereco.id && this.pessoa.endereco.length < 1) {
      this.pessoa.endereco.push(this.endereco);
    }
    this.pessoa.perfil[0] = this.perfil;

    console.log(this.pessoa);
    this.pessoaService.save(this.pessoa).subscribe(data => {
      alert('Salvo com sucesso!');
      this.popularPessoas();
      this.limparForm();
    }, erro => {
      alert('OPS! SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {
    this.pessoa = new PessoaEntity();
    this.endereco = new EnderecoEntity();
    this.perfil = new PerfilEntity();
  }

  private editar(pessoa) {
    this.pessoa = pessoa;
    this.endereco = pessoa.endereco && pessoa.endereco.length > 0 ? pessoa.endereco[pessoa.endereco.length - 1] : new EnderecoEntity() ;
    this.perfil = pessoa.perfil ? pessoa.perfil[0] : new PerfilEntity();
  }

  private deletarCliente(id: number) {
    this.pessoaService.delete(id).subscribe(data => {
      this.popularPessoas();
      alert('Deletado com sucesso!');
    }, error => {
      alert('OPS! delete VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });

  }
}

