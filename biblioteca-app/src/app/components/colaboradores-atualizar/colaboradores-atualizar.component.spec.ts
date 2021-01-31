import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresAtualizarComponent } from './colaboradores-atualizar.component';

describe('ColaboradoresAtualizarComponent', () => {
  let component: ColaboradoresAtualizarComponent;
  let fixture: ComponentFixture<ColaboradoresAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
