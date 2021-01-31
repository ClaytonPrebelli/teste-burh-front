import { ColaboradoresAtualizarComponent } from './components/colaboradores-atualizar/colaboradores-atualizar.component';
import { ColaboradoresDeletarComponent } from './components/colaboradores-deletar/colaboradores-deletar.component';
import { ColaboradoresVerComponent } from './components/colaboradores-ver/colaboradores-ver.component';
import { ColaboradoresCriarComponent } from './components/colaboradores-criar/colaboradores-criar.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { ColaboradoresCrudComponent } from './components/colaboradores-crud/colaboradores-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"contato",
    component: ContatosComponent
  },
   {
    path:"colaboradores",
    component: ColaboradoresCrudComponent
  },
  {
    path:"colaboradores/criar",
    component: ColaboradoresCriarComponent
  },
  {
    path:"colaboradores/ver/:_id",
    component: ColaboradoresVerComponent
  },
  {
    path:"colaboradores/atualizar/:_id",
    component: ColaboradoresAtualizarComponent
  },
  {
    path:"colaboradores/deletar/:_id",
    component: ColaboradoresDeletarComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
