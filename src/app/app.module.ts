import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastraCursoComponent } from "./cadastra-curso/cadastra-curso.component";
import { ConsultaCursoComponent } from "./consulta-curso/consulta-curso.component";
import { EditaCursoComponent } from "./edita-curso/edita-curso.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";


const routes: Routes = [
  {path: 'pagina-principal',component: PaginaPrincipalComponent},
  {path: 'cadastra-curso',component: CadastraCursoComponent},
  {path: 'consulta-curso',component: ConsultaCursoComponent},
  {path: 'edita-curso/:id',component: EditaCursoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    ConsultaCursoComponent,
    CadastraCursoComponent,
    EditaCursoComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
