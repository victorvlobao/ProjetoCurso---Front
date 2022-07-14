import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consulta-curso',
  templateUrl: './consulta-curso.component.html',
  styleUrls: ['./consulta-curso.component.css']
})
export class ConsultaCursoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  mensagem: string = '';

  curso: any[]=[];

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/curso?descricao=' + this.formPeriodo.value.descricao
    + "&dataInicio=" + this.formPeriodo.value.dataInicio + "&dataTermino=" +
    this.formPeriodo.value.dataTermino).subscribe
    ((data)=>{
      this.curso= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idCurso:number):void{
    if(window.confirm('Deseja realmente excluir o curso selecionado?')){
      this.httpClient.delete(environment.apiUrl+"/curso/"+idCurso,
     { responseType : 'text'})
     .subscribe(
        (data)=>{
          alert(data);
          this.ngOnInit();
        },
        (e)=>{
          alert(e.error)
          console.log(e);
        }
     )
    }
  }

  formPeriodo = new FormGroup({
    //campos do formulário de consulta
    descricao: new FormControl(''),
    dataInicio: new FormControl(''),
    dataTermino: new FormControl('')

  });

  get form(): any {
    return this.formPeriodo.controls;

  }
  onSubmit(): void {

    this.httpClient.get(environment.apiUrl + '/curso?descricao=' + this.formPeriodo.value.descricao
      + "&dataInicio=" + this.formPeriodo.value.dataInicio + "&dataTermino=" +
      this.formPeriodo.value.dataTermino).subscribe(

        (data) => { this.curso = data as any[]; },


        (error) => {
          console.log(error.error);
          console.log(this.curso);
        },

      )
  }
}
