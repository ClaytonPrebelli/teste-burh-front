import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from './../colaboradores.service';
import { Colaborador } from './../colaboradores.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores-deletar',
  templateUrl: './colaboradores-deletar.component.html',
  styleUrls: ['./colaboradores-deletar.component.css']
})
export class ColaboradoresDeletarComponent implements OnInit {
  constructor(private colaboradoresService: ColaboradoresService, private router: Router, private route: ActivatedRoute) { }
  colaborador!: Colaborador
  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('_id')
    this.colaboradoresService.readById(id).subscribe(colaborador => {
      this.colaborador = colaborador
    })
  }
  cancel():void{
    this.router.navigate(['/colaboradores'])
  }
  deleta(): void {
    const id = this.route.snapshot.paramMap.get('_id')
   this.colaboradoresService.delete(this.colaborador._id).subscribe(() => {
      this.colaboradoresService.showMessage('Colaborador Excluído com Sucesso!')
      this.router.navigate(['/colaboradores'])
    })
  }
}
