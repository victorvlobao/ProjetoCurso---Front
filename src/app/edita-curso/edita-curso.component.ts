import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-curso',
  templateUrl: './edita-curso.component.html',
  styleUrls: ['./edita-curso.component.css']
})
export class EditaCursoComponent implements OnInit {

  constructor(private HttpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  mensagem: string = '';

  formEdicao! : FormGroup;

  categoria : any[] = [];

  ngOnInit(): void {

    this.HttpClient.get(environment.apiUrl + '/categoria').subscribe((data) => {
      this.categoria = data as any[];
    });

  const idCurso = this.activatedRoute.snapshot.paramMap.get('id') as string;

  this.formEdicao = new FormGroup({

    idcurso: new FormControl(''),
    descricao: new FormControl('',[Validators.required]),
    dataInicio: new FormControl('',[Validators.required]),
    dataTermino: new FormControl('',[Validators.required]),
    quantidadeAlunos: new FormControl('',[Validators.required]),
    categoria: new FormControl('',[Validators.required])

  });

  this.HttpClient.get(environment.apiUrl + "/curso/" + idCurso).subscribe(

    (data: any) => {

      //preenchendo os campos do formulário com os dados do curso
      this.formEdicao.patchValue({ idcurso: data.idcurso });
      this.formEdicao.patchValue({ descricao: data.descricao });
      this.formEdicao.patchValue({ dataInicio: data.dataInicio });
      this.formEdicao.patchValue({ dataTermino: data.dataTermino });
      this.formEdicao.patchValue({ quantidadeAlunos: data.quantidadeAlunos });
      this.formEdicao.patchValue({ categoria: data.categoria.idcategoria });

    },
    (e) => {
      console.log(e);
    }
  )

  }

    get form():any{
      return this.formEdicao.controls;
    }

onSubmit():void{

  this.HttpClient.put(environment.apiUrl + '/curso', this.formEdicao.value,
  {responseType: 'text'})
  .subscribe(
    data => {
      this.mensagem = data;
    },
    e =>{

      this.mensagem = "Ocorreu um erro, a edição não foi realizada."
      console.log(e);

    }

  )

}



}
