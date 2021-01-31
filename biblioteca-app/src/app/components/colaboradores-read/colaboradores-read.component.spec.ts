import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresReadComponent } from './colaboradores-read.component';

describe('ColaboradoresReadComponent', () => {
  let component: ColaboradoresReadComponent;
  let fixture: ComponentFixture<ColaboradoresReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
