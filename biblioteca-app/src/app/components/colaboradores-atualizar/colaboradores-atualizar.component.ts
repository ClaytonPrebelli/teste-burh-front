import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from './../colaboradores.service';
import { Colaborador } from './../colaboradores.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores-atualizar',
  templateUrl: './colaboradores-atualizar.component.html',
  styleUrls: ['./colaboradores-atualizar.component.css']
})
export class ColaboradoresAtualizarComponent implements OnInit {
  colaborador!: Colaborador;

  constructor(private colaboradoresService: ColaboradoresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.colaboradoresService.readById(id).subscribe(colaborador => {
      this.colaborador = colaborador
    });
  }

  atualizar(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    console.log(this.colaborador._id)
   this.colaboradoresService.update(this.colaborador._id).subscribe(() => {
      this.colaboradoresService.showMessage('Colaborador Excluído com Sucesso!')
      this.router.navigate(['/colaboradores'])
    })
  }

  cancel(): void {
    this.router.navigate(['/colaboradores'])
  }
}