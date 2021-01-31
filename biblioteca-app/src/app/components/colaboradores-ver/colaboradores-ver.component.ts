import { CpfPipe } from './../cpf.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from './../colaboradores.service';
import { Colaborador } from './../colaboradores.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores-ver',
  templateUrl: './colaboradores-ver.component.html',
  styleUrls: ['./colaboradores-ver.component.css']
})
export class ColaboradoresVerComponent implements OnInit {

  constructor(private colaboradoresService: ColaboradoresService, private router: Router, private route: ActivatedRoute) { }
  colaborador!: Colaborador;
  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('_id')
    this.colaboradoresService.readById(id).subscribe(colaborador => {
      this.colaborador = colaborador
    })
  }
voltar():void{
  this.router.navigate(['colaboradores'])
}
}
