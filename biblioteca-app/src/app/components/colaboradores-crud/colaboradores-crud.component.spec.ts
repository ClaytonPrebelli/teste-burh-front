import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresCrudComponent } from './colaboradores-crud.component';

describe('ColaboradoresCrudComponent', () => {
  let component: ColaboradoresCrudComponent;
  let fixture: ComponentFixture<ColaboradoresCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
