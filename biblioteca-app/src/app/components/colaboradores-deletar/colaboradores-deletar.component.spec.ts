import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresDeletarComponent } from './colaboradores-deletar.component';

describe('ColaboradoresDeletarComponent', () => {
  let component: ColaboradoresDeletarComponent;
  let fixture: ComponentFixture<ColaboradoresDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
