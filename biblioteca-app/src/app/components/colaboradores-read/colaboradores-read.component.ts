import { CpfPipe } from './../cpf.pipe';
import { ColaboradoresService } from './../colaboradores.service';
import { Colaborador } from './../colaboradores.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-colaboradores-read',
  templateUrl: './colaboradores-read.component.html',
  styleUrls: ['./colaboradores-read.component.css']
})
export class ColaboradoresReadComponent implements OnInit {
    colaboradores!: Colaborador[]
    displayedColumns = ['nome', 'cpf', 'cargo', 'action']
  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit(): void {
    this.colaboradoresService.read().subscribe(colaboradores => {
      this.colaboradores = colaboradores
    })
  }
 

}
