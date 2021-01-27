import { Colaborador } from './../colaboradores.model';
import { ColaboradoresService } from './../colaboradores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores-criar',
  templateUrl: './colaboradores-criar.component.html',
  styleUrls: ['./colaboradores-criar.component.css']
})
export class ColaboradoresCriarComponent implements OnInit {
colaborador: Colaborador = {
        id:1,
        nome: 'clayton',
        rg:'33234',
        cpf:'2344234',
        telefone:'23423',
        email:'24234',
        nascimento: '234234',
        admissao:'2344234',
        cargo:'234234',
        vr:15.00,
        vt:8.80,
        salario:1500.00}

  constructor(private router: Router,private colaboradoresService: ColaboradoresService,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  criaColaborador() :void{
    this.colaboradoresService.create(this.colaborador).subscribe(() =>{
      this.colaboradoresService.showMessage('Colaborador adicionado!'),
      this.router.navigate(['/colaboradores'])
    })
  }
  cancel(): void{
    this.router.navigate(['/colaboradores'])
  }
}
