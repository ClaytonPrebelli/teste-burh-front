import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores-crud',
  templateUrl: './colaboradores-crud.component.html',
  styleUrls: ['./colaboradores-crud.component.css']
})
export class ColaboradoresCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  navegar_criar(): void{
    this.router.navigate(['/colaboradores/criar'])
  }

}
