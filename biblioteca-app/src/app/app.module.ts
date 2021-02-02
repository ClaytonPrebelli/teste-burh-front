import { NgModule, Component, NgModuleDecorator, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/templates/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list/';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './views/templates/footer/footer.component';
import { NavbarComponent } from './views/templates/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ColaboradoresCrudComponent } from './components/colaboradores-crud/colaboradores-crud.component';
import { ColaboradoresCriarComponent } from './components/colaboradores-criar/colaboradores-criar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ColaboradoresReadComponent } from './components/colaboradores-read/colaboradores-read.component';
import { CpfPipe } from './components/cpf.pipe';
import { WhiteDirective } from './directives/white.directive';
import { ColaboradoresVerComponent } from './components/colaboradores-ver/colaboradores-ver.component';
import { ColaboradoresAtualizarComponent } from './components/colaboradores-atualizar/colaboradores-atualizar.component';
import { ColaboradoresDeletarComponent } from './components/colaboradores-deletar/colaboradores-deletar.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContatosComponent,
    ColaboradoresCrudComponent,
    ColaboradoresCriarComponent,
    ColaboradoresReadComponent,
    CpfPipe,
    WhiteDirective,
    ColaboradoresVerComponent,
    ColaboradoresAtualizarComponent,
    ColaboradoresDeletarComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
    
    

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
