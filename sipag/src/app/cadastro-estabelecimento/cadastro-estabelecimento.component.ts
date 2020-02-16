import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl  } from '@angular/forms';
import { EstabelecimentoServiceService } from '../services/estabelecimentoService/estabelecimento-service.service';
import { EstabelecimentoEntity } from '../entidades/estabelecimentoEntity';

@Component({
  selector: 'app-cadastro-estabelecimento',
  templateUrl: './cadastro-estabelecimento.component.html',
  styleUrls: ['./cadastro-estabelecimento.component.scss']
})
export class CadastroEstabelecimentoComponent {

  private form: FormGroup;

  public estabelecimentos: any = [];

  private estabelecimento: EstabelecimentoEntity = new EstabelecimentoEntity();

  constructor(private fb: FormBuilder,
              private estabelecimentoService: EstabelecimentoServiceService) {
    this.buildForm();
    console.log(this.form);
    this.popularEstabelecimentos();
  }

  public buildForm() {
    this.form = this.fb.group({
      //Estabelecimento
      nome: [this.estabelecimento.nome, [Validators.required]],
      cnpj: [this.estabelecimento.cnpj, [Validators.required]],
      enderecos: this.fb.array([]),
      email: this.fb.array([]),
      telefone: this.fb.array([]),
    });
  }


  get getEnderecoControl() {
    return this.form.get('enderecos') as FormArray;
  }

  get getEmailControl() {
    return this.form.get('email') as FormArray;
  }

  get getTelefoneControl() {
    return this.form.get('telefone') as FormArray;
  }


  public adicionarEndereco(): void {

    const endereco = this.fb.group({
      cep: ['', Validators.required],
      lougradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: [, Validators.required],
      uf: ['', Validators.required],
      complemento: ['', Validators.required]
    });
    endereco.clearAsyncValidators();
    this.getEnderecoControl.push(endereco);
    console.log(this.form)
  }

  public deleteEndereco(index) {
    this.getEnderecoControl.removeAt(index);
  }

  public deleteEmail(index) {
    this.getEmailControl.removeAt(index);
  }

  public deleteTelefone(index) {
    this.getTelefoneControl.removeAt(index);
  }

  public adicionarEmail(): void {
    const email = this.fb.group({
      email: [, Validators.required],
    });
    email.clearAsyncValidators();
    this.getEmailControl.push(email);
  }

  public adicionarTelefone(): void {
    const telefone = this.fb.group({
      numero: [, Validators.required],
      tipo: [, Validators.required],
    });
    telefone.clearAsyncValidators();
    this.getTelefoneControl.push(telefone);
  }

  private popularEstabelecimentos() {
    this.estabelecimentoService.findAll().subscribe(data => {
      this.estabelecimentos = data;
    });
  }

  private onSubmit() {

    this.estabelecimentoService.save(this.form.value).subscribe(data => {
      alert('Salvo com sucesso!');
      this.popularEstabelecimentos();
      this.limparForm();
    }, erro => {
      alert('OPS! SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {

    this.form.setValue(null);
  }

  private editar(estabelecimento) {

  }

  private deletarEstabelecimento(id: number) {
    this.estabelecimentoService.delete(id).subscribe(data => {
      this.popularEstabelecimentos();
      alert('Deletado com sucesso!');
    }, error => {
      alert('OPS! delete VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });
  }

}
