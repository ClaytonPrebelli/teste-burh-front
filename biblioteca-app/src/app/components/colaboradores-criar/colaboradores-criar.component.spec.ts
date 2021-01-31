import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresCriarComponent } from './colaboradores-criar.component';

describe('ColaboradoresCriarComponent', () => {
  let component: ColaboradoresCriarComponent;
  let fixture: ComponentFixture<ColaboradoresCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
