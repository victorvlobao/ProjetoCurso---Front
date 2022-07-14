import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastra-curso',
  templateUrl: './cadastra-curso.component.html',
  styleUrls: ['./cadastra-curso.component.css']
})
export class CadastraCursoComponent implements OnInit {

  mensagem: string = '';

  formCadastro!: FormGroup;

  categorias!: Categoria[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.formCadastro = new FormGroup({

      descricao: new FormControl('', [Validators.required]),
      dataInicio: new FormControl('', [Validators.required]),
      dataTermino: new FormControl('', [Validators.required]),
      quantidadeAlunos: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });

    this.listarCategorias();
  }


  listarCategorias() {
    this.categorias = [
        {idcategoria: 1,categoria:'Multiplataforma'},
        {idcategoria: 2,categoria:'Banco de dados'},
        {idcategoria: 3,categoria:'Metodologia'},
        {idcategoria: 4,categoria:'Comportamento'},
        {idcategoria: 5,categoria:'Comunicação'}
    ];
  }

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {
    let curso = this.formCadastro.value;
    let categoria = {"idcategoria":this.formCadastro.get('categoria')?.value};
    curso.categoria = categoria;
    console.log(curso)
    this.httpClient.post(
      environment.apiUrl + '/curso',
      curso, { responseType: 'text'}).subscribe(
        data =>{
          this.mensagem = "Curso Cadastrado com Sucesso";
          this.formCadastro.reset();
        },
        e => {
          alert(e.error)
          this.mensagem = "ERRO: Verifique as datas e se o curso já existe!";
          console.log(e);
        }
      )
  }

}
