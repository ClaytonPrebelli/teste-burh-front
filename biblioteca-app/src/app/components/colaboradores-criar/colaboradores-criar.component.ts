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
    
    
    nome: '',
    rg: '',
    cpf: '',
    telefone: '',
    email: '',
    nascimento: '',
    admissao: '',
    cargo: '',
    vr: 0.00,
    vt: 0.00,
    salario: 0.00
  }
  


  constructor(private router: Router, private colaboradoresService: ColaboradoresService, private activatedRoute: ActivatedRoute,) { }
 
  ngOnInit(): void {
   
  }
  criaColaborador(): void {
    this.colaboradoresService.create(this.colaborador).subscribe(() => {
      this.colaboradoresService.showMessage('Colaborador adicionado!'),
        this.router.navigate(['/colaboradores'])
    })
  }
  cancel(): void {
    this.router.navigate(['/colaboradores'])
  }
}
