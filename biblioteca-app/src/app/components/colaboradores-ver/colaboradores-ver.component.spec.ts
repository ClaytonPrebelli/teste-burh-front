import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresVerComponent } from './colaboradores-ver.component';

describe('ColaboradoresVerComponent', () => {
  let component: ColaboradoresVerComponent;
  let fixture: ComponentFixture<ColaboradoresVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
