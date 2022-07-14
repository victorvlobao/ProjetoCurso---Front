import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCursoComponent } from './consulta-curso.component';

describe('ConsultaCursoComponent', () => {
  let component: ConsultaCursoComponent;
  let fixture: ComponentFixture<ConsultaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
