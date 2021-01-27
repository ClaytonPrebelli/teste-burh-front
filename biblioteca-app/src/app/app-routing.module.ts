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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
